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
    if (id === "screen-gender") this._gender();
    else if (id === "screen-archetype") this._archetype();
    else if (id === "screen-personality") this._personality();
  }

  init() {
    this._setupLanguageDropdown();
    this.applyTranslations();
    this._splash(); this._gender(); this._archetype(); this._personality();
    this._setupGlobalTooltips();
    this._setupTutorial();
    this._setupCancellationModal();
    this._setupHateModal();
    this._setupViralModal();
    this._setupStoryUnlockModal();
    this._setupStrike2Modal();
    this._setupCancGameOverModal();
    this._setupMobileBoostersModal();
    this._setupProfileModal();
    this._setupShortcutsModal();
    this._setupGlobalKeyboardShortcuts();
    this._setupFullscreenControls();
    this._setupAudioControls();
    if(window.twemoji) window.twemoji.parse(document.body);
  }

  _setupAudioControls() {
    snd.initMusic();
    const toggleMusic = document.getElementById("toggle-music");
    const sliderMusic = document.getElementById("slider-music-vol");
    const toggleSfx = document.getElementById("toggle-sfx");
    const sliderSfx = document.getElementById("slider-sfx-vol");

    if (toggleMusic) {
      toggleMusic.checked = snd.musicEnabled;
      toggleMusic.onchange = (e) => {
        snd.setMusicEnabled(e.target.checked);
      };
    }
    if (sliderMusic) {
      sliderMusic.value = Math.round(snd.musicVolume * 100);
      sliderMusic.oninput = (e) => {
        snd.setMusicVolume(parseFloat(e.target.value) / 100);
      };
    }
    if (toggleSfx) {
      toggleSfx.checked = snd.sfxEnabled;
      toggleSfx.onchange = (e) => {
        snd.setSfxEnabled(e.target.checked);
      };
    }
    if (sliderSfx) {
      sliderSfx.value = Math.round(snd.sfxVolume * 100);
      sliderSfx.oninput = (e) => {
        snd.setSfxVolume(parseFloat(e.target.value) / 100);
      };
    }

    // ── MODAL POP-UP DE AUDIO ──
    const audioModal = document.getElementById("audio-modal-overlay");
    const btnOpenAudio = document.getElementById("btn-open-audio-modal");
    const btnCloseAudio = document.getElementById("btn-close-audio-modal");
    const btnAudioOk = document.getElementById("btn-audio-modal-ok");

    const openAudioModal = () => {
      if (audioModal) audioModal.classList.add("active");
    };
    const closeAudioModal = () => {
      if (audioModal) audioModal.classList.remove("active");
    };

    if (btnOpenAudio) btnOpenAudio.onclick = () => { snd.click(); openAudioModal(); };
    if (btnCloseAudio) btnCloseAudio.onclick = () => { closeAudioModal(); };
    if (btnAudioOk) btnAudioOk.onclick = () => { snd.click(); closeAudioModal(); };

    if (audioModal) {
      audioModal.addEventListener("click", (ev) => {
        if (ev.target === audioModal) closeAudioModal();
      });
    }

    window.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape" && audioModal && audioModal.classList.contains("active")) {
        closeAudioModal();
      }
    });
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

      // ── Cancellation Game-Over Modal: Aceptar con Espacio ───────────────
      const cancGameOverModal = document.getElementById("canc-gameover-modal-overlay");
      if (cancGameOverModal && cancGameOverModal.classList.contains("active")) {
        if (isConfirm) {
          ev.preventDefault();
          document.getElementById("btn-cgo-ok")?.click();
          return;
        }
      }

      // ── Repeat Archetype Modal: Aceptar con Espacio ─────────────────────
      const repeatArchModal = document.getElementById("repeat-archetype-modal-overlay");
      if (repeatArchModal && repeatArchModal.classList.contains("active")) {
        if (isConfirm) {
          ev.preventDefault();
          document.getElementById("btn-repeat-arch-ok")?.click();
          return;
        }
      }

      // ── Story Unlock Modal: Siguiente o Finalizar con Espacio ───────────
      const storyUnlockModal = document.getElementById("story-unlock-modal-overlay");
      if (storyUnlockModal && storyUnlockModal.classList.contains("active")) {
        if (isConfirm) {
          ev.preventDefault();
          const sNext = document.getElementById("btn-story-next");
          if (sNext && sNext.style.display !== "none") {
            sNext.click();
          } else {
            document.getElementById("btn-story-unlock-ok")?.click();
          }
          return;
        }
      }

      // ── Audio Modal: Cerrar con Espacio / Enter ─────────────────────────
      const audioModal = document.getElementById("audio-modal-overlay");
      const epilogueModal = document.getElementById("story-epilogue-modal-overlay");
      if (epilogueModal && epilogueModal.classList.contains("active")) {
        if (isConfirm) {
          ev.preventDefault();
          snd.click();
          epilogueModal.classList.remove("active");
          return;
        }
      }
      if (audioModal && audioModal.classList.contains("active")) {
        if (isConfirm) {
          ev.preventDefault();
          document.getElementById("btn-audio-modal-ok")?.click();
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
    const currentAvatar = e.getAvatar();
    const genderedArch = getGenderedArchetype(arch, e.genero);
    const t = (k, p, d) => typeof i18n !== "undefined" ? i18n.t(k, p, d) : d;
    const pron = t("pronouns." + e.genero, null, GENERO_LABELS[e.genero] || "Elle");
    const archName = (typeof i18n !== "undefined" && i18n.t(`archetypes.${arch.id}.nombre`)) || genderedArch;
    const persName = (typeof i18n !== "undefined" && i18n.t(`personalities.${pers.id}.nombre`)) || pers.nombre;
    const archDesc = (typeof i18n !== "undefined" && i18n.t(`archetypes.${arch.id}.desc`)) || (typeof getGenderedArchetypeDesc === "function" ? getGenderedArchetypeDesc(arch, e.genero) : arch.desc);
    const persDesc = (typeof i18n !== "undefined" && i18n.t(`personalities.${pers.id}.desc`)) || (typeof getGenderedPersonalityDesc === "function" ? getGenderedPersonalityDesc(pers, e.genero) : pers.desc);

    const profileHeader = document.querySelector("#perfil-modal-overlay .spec-label");
    if (profileHeader) profileHeader.textContent = "📋 " + t("profile.title", null, "PERFIL COMPLETO");

    const avEl = document.getElementById("perfil-avatar"); if(avEl) avEl.textContent = currentAvatar;
    const nameEl = document.getElementById("perfil-name"); if(nameEl) nameEl.textContent = archName.toUpperCase();
    const handleEl = document.getElementById("perfil-handle"); if(handleEl) handleEl.textContent = `${e.handle} · ${pers.icono} ${persName.toUpperCase()}`;

    const aChips = (arch.afines||[]).map(f => {
      const pName = (typeof i18n !== "undefined" && i18n.t("cards.palo_" + f)) || f;
      return `<span class="chip-afin-sm">${CARD_PALOS[f]?.icono||""} ${pName}</span>`;
    }).join("");
    const dChips = (arch.debiles||[]).map(f => {
      const pName = (typeof i18n !== "undefined" && i18n.t("cards.palo_" + f)) || f;
      return `<span class="chip-debil-sm">${CARD_PALOS[f]?.icono||""} ${pName}</span>`;
    }).join("");
    const synergyLine = e.comboRisk ? "+6% bonus" : "Standard";
    const goalPct = Math.min(100, Math.floor((e.seguidores/80000)*100));

    const contentEl = document.getElementById("perfil-identity-content");
    if(contentEl) {
      contentEl.innerHTML = `
        <div class="char-identity-box" style="border:1px solid var(--border); margin-bottom:8px;">
          <div class="id-row"><span class="id-label">${t("profile.pronouns", null, "PRONOMBRES")}</span><span class="id-val">${pron}</span></div>
          <div class="id-row"><span class="id-label">${t("profile.archetype_label", null, "ARQUETIPO")}</span><span class="id-val">${archName} // ${archDesc}</span></div>
          <div class="id-row"><span class="id-label">${t("profile.personality_label", null, "PERSONALIDAD")}</span><span class="id-val">${persDesc}</span></div>
          <div class="id-row"><span class="id-label">${t("profile.allied", null, "CARTAS AFINES")}</span><span>${aChips}</span></div>
          <div class="id-row"><span class="id-label">${t("profile.weak", null, "CARTAS DÉBILES")}</span><span>${dChips}</span></div>
          <div class="id-row"><span class="id-label">${t("profile.traits", null, "RASGOS")}</span><span class="id-val" style="color:var(--blue-bright)">${pers.bonus} · ${pers.malus}</span></div>
          <div class="id-row"><span class="id-label">${t("profile.synergy", null, "SINERGIA")}</span><span class="id-val">${synergyLine}</span></div>
          <div class="id-row"><span class="id-label">${t("profile.cancels", null, "CANCELACIONES")}</span><span class="id-val" style="color:${e.strikesCancelacion>0?'var(--red)':'var(--green)'}; font-weight:700;">STRIKES: ${e.strikesCancelacion} / 3</span></div>
        </div>
        <div class="goal-progress-box" style="border:1px solid var(--border);">
          <div class="goal-label">${t("profile.win_condition", null, "META DE VICTORIA")}: 80K SEGUIDORES — ${goalPct}%</div>
          <div class="goal-track"><div class="goal-fill" style="width:${goalPct}%"></div></div>
        </div>
      `;
    }
  }

  _setupTutorial() {
    this.tutSlide = 1;
    this.tutMax = 4;
    this._applyModalTranslations(); // populate modal content in current language
    const updateTut = () => {
      document.querySelectorAll("#tutorial-modal-overlay .tutorial-slide").forEach((s, i) => s.classList.toggle("active", i+1 === this.tutSlide));
      document.querySelectorAll("#tutorial-modal-overlay .tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i+1 === this.tutSlide));
      document.getElementById("btn-tutorial-prev").style.visibility = this.tutSlide > 1 ? "visible" : "hidden";
      const nextBtn = document.getElementById("btn-tutorial-next");
      const lang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
      const spaceLabel = lang === "ja" ? "スペース" : lang === "en" ? "SPACE" : "ESPACIO";
      if (nextBtn) nextBtn.innerHTML = this.tutSlide === this.tutMax
        ? (i18n.t("tutorial.start") + ` <span class="key-hint-pill">␣ ${spaceLabel}</span>`)
        : (i18n.t("tutorial.next") + ` <span class="key-hint-pill">␣ ${spaceLabel}</span>`);
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

  _applyModalTranslations() {
    if (typeof i18n === "undefined") return;
    const t = (k, d) => i18n.t(k, null, d);

    // ── Tutorial modal ──────────────────────────────────────────
    const tutHeader = document.querySelector("#tutorial-modal-overlay .spec-label");
    if (tutHeader) tutHeader.textContent = t("tutorial.header", "📖 CÓMO JUGAR // GUÍA DE SUPERVIVENCIA");

    const tutSkipBottom = document.getElementById("btn-tutorial-skip-bottom");
    if (tutSkipBottom) tutSkipBottom.textContent = t("tutorial.skip", "SALTAR TUTORIAL");

    const tutPrev = document.getElementById("btn-tutorial-prev");
    if (tutPrev) tutPrev.textContent = t("tutorial.prev", "⬅ ATRÁS");

    const tutNext = document.getElementById("btn-tutorial-next");
    if (tutNext) {
      const isFinal = this.tutSlide === this.tutMax;
      const label = isFinal ? t("tutorial.start", "COMENZAR ▶") : t("tutorial.next", "SIGUIENTE ➡");
      tutNext.innerHTML = label + ' <span class="key-hint-pill">␣ ESPACIO</span>';
    }

    const tut1 = document.getElementById("tut-slide-1");
    if (tut1) tut1.innerHTML = `<h3>${t("tutorial.slide1_title")}</h3><p>${t("tutorial.slide1_p1")}</p><p>${t("tutorial.slide1_p2")}</p>`;
    const tut2 = document.getElementById("tut-slide-2");
    if (tut2) tut2.innerHTML = `<h3>${t("tutorial.slide2_title")}</h3><p>${t("tutorial.slide2_p1")}</p>`;
    const tut3 = document.getElementById("tut-slide-3");
    if (tut3) tut3.innerHTML = `<h3>${t("tutorial.slide3_title")}</h3><p>${t("tutorial.slide3_p1")}</p>`;
    const tut4 = document.getElementById("tut-slide-4");
    if (tut4) tut4.innerHTML = `<h3>${t("tutorial.slide4_title")}</h3><p>${t("tutorial.slide4_p1")}</p>`;

    // ── Cancellation modal ──────────────────────────────────────
    const cancHeader = document.querySelector("#cancellation-modal-overlay .spec-label");
    if (cancHeader) cancHeader.textContent = t("cancellation_modal.header", "⚖️ SISTEMA DE CANCELACIÓN // 3 PASOS");

    const cancSlide1 = document.getElementById("canc-slide-1");
    if (cancSlide1) cancSlide1.innerHTML = `<h3>${t("cancellation_modal.slide1_title")}</h3><p>${t("cancellation_modal.slide1_p1")}</p><p>${t("cancellation_modal.slide1_p2")}</p>`;

    const cancSlide2 = document.getElementById("canc-slide-2");
    if (cancSlide2) cancSlide2.innerHTML = `<h3>${t("cancellation_modal.slide2_title")}</h3><p>${t("cancellation_modal.slide2_p1")}</p><div class="strike-meter-row"><div class="strike-slot active-1">${t("cancellation_modal.strike1","STRIKE 1: ADVERTENCIA")}</div><div class="strike-slot active-2">${t("cancellation_modal.strike2","STRIKE 2: CRÍTICO")}</div><div class="strike-slot danger-target">${t("cancellation_modal.strike3","STRIKE 3: EXPULSIÓN")}</div></div><p>${t("cancellation_modal.slide2_p2")}</p>`;

    const cancSlide3 = document.getElementById("canc-slide-3");
    if (cancSlide3) cancSlide3.innerHTML = `<h3>${t("cancellation_modal.slide3_title")}</h3><p>${t("cancellation_modal.slide3_p1")}</p><p>${t("cancellation_modal.slide3_p2")}</p><p>${t("cancellation_modal.slide3_p3")}</p>`;

    const cancNext = document.getElementById("btn-canc-next");
    if (cancNext) cancNext.innerHTML = t("cancellation_modal.understood","ENTENDIDO ▶") + ' <span class="key-hint-pill">␣ ESPACIO</span>';

    const cancPrev = document.getElementById("btn-canc-prev");
    if (cancPrev) cancPrev.textContent = t("tutorial.prev", "⬅ ATRÁS");

    // ── Hate modal ──────────────────────────────────────────────
    const hateHeader = document.querySelector("#hate-modal-overlay .spec-label");
    if (hateHeader) hateHeader.textContent = t("hate_modal.header", "🔥 ODIO Y ZONA ROJA // 3 PASOS");

    const hateSlide1 = document.getElementById("hate-slide-1");
    if (hateSlide1) hateSlide1.innerHTML = `<h3>${t("hate_modal.slide1_title")}</h3><p>${t("hate_modal.slide1_p1")}</p>`;

    const hateSlide2 = document.getElementById("hate-slide-2");
    if (hateSlide2) hateSlide2.innerHTML = `<h3>${t("hate_modal.slide2_title")}</h3><p>${t("hate_modal.slide2_p1")}</p><div class="strike-meter-row"><div class="strike-slot active-1">${t("hate_modal.turn1","TURNO 1: ALERTA ROJA")}</div><div class="strike-slot active-2">${t("hate_modal.turn2","TURNO 2: ÚLTIMA GRACIA")}</div><div class="strike-slot danger-target">${t("hate_modal.turn3","TURNO 3: CIERRE FORZADO")}</div></div><p>${t("hate_modal.slide2_p2")}</p>`;

    const hateSlide3 = document.getElementById("hate-slide-3");
    if (hateSlide3) hateSlide3.innerHTML = `<h3>${t("hate_modal.slide3_title")}</h3><p>${t("hate_modal.slide3_p1")}</p><p>${t("hate_modal.slide3_p2")}</p><p>${t("hate_modal.slide3_p3")}</p>`;

    const hateNext = document.getElementById("btn-hate-next");
    if (hateNext) hateNext.innerHTML = t("hate_modal.understood","ENTENDIDO ▶") + ' <span class="key-hint-pill">␣ ESPACIO</span>';

    const hatePrev = document.getElementById("btn-hate-prev");
    if (hatePrev) hatePrev.textContent = t("tutorial.prev", "⬅ ATRÁS");

    // ── Viral Streak modal ──────────────────────────────────────
    const viralHeader = document.querySelector("#viral-modal-overlay .spec-label");
    if (viralHeader) viralHeader.textContent = t("viral_modal.header", "⚡ EVENTO ESPECIAL: ¡TE VOLVISTE VIRAL!");

    const viralSlide1 = document.getElementById("viral-slide-1");
    if (viralSlide1) viralSlide1.innerHTML = `<h3>${t("viral_modal.slide1_title")}</h3><p>${t("viral_modal.slide1_p1")}</p><p>${t("viral_modal.slide1_p2")}</p>`;

    const viralSlide2 = document.getElementById("viral-slide-2");
    if (viralSlide2) viralSlide2.innerHTML = `<h3>${t("viral_modal.slide2_title")}</h3><p>${t("viral_modal.slide2_p1")}</p><p>${t("viral_modal.slide2_p2")}</p>`;

    const viralSlide3 = document.getElementById("viral-slide-3");
    if (viralSlide3) {
      // Update title, paragraph and card texts WITHOUT replacing buttons
      const vs3h3 = viralSlide3.querySelector("h3");
      if (vs3h3) vs3h3.textContent = t("viral_modal.slide3_title");
      const vs3p = viralSlide3.querySelector("p");
      if (vs3p) vs3p.innerHTML = t("viral_modal.slide3_p1");
      const vs3card = viralSlide3.querySelector(".strike-info-card");
      if (vs3card) {
        vs3card.innerHTML = `<strong style="color:var(--red);">${t("viral_modal.consequences_title")}</strong><br>${t("viral_modal.consequences_desc")}`;
      }
      const vs3accept = document.getElementById("btn-viral-accept");
      if (vs3accept) vs3accept.textContent = t("viral_modal.accept_btn");
      const vs3decline = document.getElementById("btn-viral-decline");
      if (vs3decline) vs3decline.textContent = t("viral_modal.decline_btn");
    }

    const viralNext = document.getElementById("btn-viral-next");
    const lang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
    const spaceLabel = lang === "ja" ? "スペース" : lang === "en" ? "SPACE" : "ESPACIO";
    if (viralNext) viralNext.innerHTML = t("tutorial.next", "SIGUIENTE ➡") + ` <span class="key-hint-pill">␣ ${spaceLabel}</span>`;

    const viralPrev = document.getElementById("btn-viral-prev");
    if (viralPrev) viralPrev.textContent = t("tutorial.prev", "⬅ ATRÁS");

    // ── Story Unlock Modal ──────────────────────────────────────
    const storyHeader = document.querySelector("#story-unlock-modal-overlay .spec-label");
    if (storyHeader) storyHeader.textContent = t("story_modal.header", "⚡ NUEVA TRAMA DESCUBIERTA");

    const storySlide1 = document.getElementById("story-slide-1");
    if (storySlide1) {
      const s1h3 = storySlide1.querySelector("h3");
      if (s1h3) s1h3.textContent = t("story_modal.slide1_title", "¡Encontraste una pista!");
      const s1ps = storySlide1.querySelectorAll("p");
      if (s1ps[0]) s1ps[0].textContent = t("story_modal.slide1_p1", "¡Entraste en modo historia! Acabás de descubrir una pista que conecta a varios personajes detrás de escena.");
      if (s1ps[1]) s1ps[1].textContent = t("story_modal.slide1_p2", "Prestá atención a lo que sucede en el feed.");
    }

    const storySlide2 = document.getElementById("story-slide-2");
    if (storySlide2) {
      const s2h3 = storySlide2.querySelector("h3");
      if (s2h3) s2h3.textContent = t("story_modal.slide2_title", "Leé entre líneas");
      const s2p = storySlide2.querySelector("p");
      if (s2p) s2p.innerHTML = t("story_modal.slide2_p1", "Prestá atención al contexto y a los <strong>replies latientes</strong>. Cada carta de historia esconde respuestas de otros usuarios que revelan qué está pasando realmente.");
    }

    const storySlide3 = document.getElementById("story-slide-3");
    if (storySlide3) {
      const s3h3 = storySlide3.querySelector("h3");
      if (s3h3) s3h3.textContent = t("story_modal.slide3_title", "La historia es colectiva");
      const s3p = storySlide3.querySelector("p");
      if (s3p) s3p.innerHTML = t("story_modal.slide3_p1", "Para entender la historia completa, tenés que <strong>jugar con otros personajes</strong>. Cada arquetipo vive una parte de la verdad y tiene su propio punto de vista.");
      // Keep the button but update its text (preserve event listener)
      const s3btn = document.getElementById("btn-story-unlock-ok");
      if (s3btn) {
        // Update text node only, preserve child span
        const textNode = Array.from(s3btn.childNodes).find(n => n.nodeType === 3);
        if (textNode) textNode.textContent = t("story_modal.continue_btn", "SEGUIR JUGANDO") + " ";
        const pill = s3btn.querySelector(".key-hint-pill");
        if (pill) pill.textContent = "␣ " + spaceLabel;
      }
    }

    const storyPrev = document.getElementById("btn-story-prev");
    if (storyPrev) storyPrev.textContent = t("tutorial.prev", "⬅ ATRÁS");
    const storyNext = document.getElementById("btn-story-next");
    if (storyNext) storyNext.innerHTML = t("story_modal.next_btn", "SIGUIENTE ➡") + ` <span class="key-hint-pill">␣ ${spaceLabel}</span>`;
  }

  _startTutorial() {
    this.tutSlide = 1;
    document.querySelectorAll("#tutorial-modal-overlay .tutorial-slide").forEach((s, i) => s.classList.toggle("active", i === 0));
    document.querySelectorAll("#tutorial-modal-overlay .tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i === 0));
    document.getElementById("btn-tutorial-prev").style.visibility = "hidden";
    const nextBtn = document.getElementById("btn-tutorial-next");
    if (nextBtn) nextBtn.innerHTML = i18n.t("tutorial.next","SIGUIENTE ➡") + ' <span class="key-hint-pill">␣ ESPACIO</span>';
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
      const cancLang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
      const spaceKey = cancLang === "ja" ? "スペース" : cancLang === "en" ? "SPACE" : "ESPACIO";
      if (prevBtn) {
        prevBtn.style.visibility = this.cancSlide > 1 ? "visible" : "hidden";
        prevBtn.textContent = cancLang === "ja" ? "⬅ 戻る" : cancLang === "en" ? "⬅ BACK" : "⬅ ATRÁS";
      }
      if (nextBtn) {
        if (this.cancSlide === this.cancMax) {
          const tOk = cancLang === "ja" ? "了解 ✕" : cancLang === "en" ? "UNDERSTOOD ✕" : "ENTENDIDO ✕";
          nextBtn.innerHTML = `${tOk} <span class="key-hint-pill">␣ ${spaceKey}</span>`;
        } else {
          const tNext = cancLang === "ja" ? "次へ ➡" : cancLang === "en" ? "NEXT ➡" : "SIGUIENTE ➡";
          nextBtn.innerHTML = `${tNext} <span class="key-hint-pill">␣ ${spaceKey}</span>`;
        }
      }
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
    this._applyModalTranslations();
    const overlay = document.getElementById("cancellation-modal-overlay");
    if (!overlay) return;
    overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i === 0));
    overlay.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i === 0));
    const cancLang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
    const prevBtn = document.getElementById("btn-canc-prev");
    const nextBtn = document.getElementById("btn-canc-next");
    if (prevBtn) {
      prevBtn.style.visibility = "hidden";
      prevBtn.textContent = cancLang === "ja" ? "⬅ 戻る" : cancLang === "en" ? "⬅ BACK" : "⬅ ATRÁS";
    }
    if (nextBtn) {
      const tNext = cancLang === "ja" ? "次へ ➡" : cancLang === "en" ? "NEXT ➡" : "SIGUIENTE ➡";
      const spaceKey = cancLang === "ja" ? "スペース" : cancLang === "en" ? "SPACE" : "ESPACIO";
      nextBtn.innerHTML = `${tNext} <span class="key-hint-pill">␣ ${spaceKey}</span>`;
    }
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
      const hateLang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
      const spaceKey = hateLang === "ja" ? "スペース" : hateLang === "en" ? "SPACE" : "ESPACIO";
      if (prevBtn) {
        prevBtn.style.visibility = this.hateSlide > 1 ? "visible" : "hidden";
        prevBtn.textContent = hateLang === "ja" ? "⬅ 戻る" : hateLang === "en" ? "⬅ BACK" : "⬅ ATRÁS";
      }
      if (nextBtn) {
        if (this.hateSlide === this.hateMax) {
          const tOk = hateLang === "ja" ? "了解 ✕" : hateLang === "en" ? "UNDERSTOOD ✕" : "ENTENDIDO ✕";
          nextBtn.innerHTML = `${tOk} <span class="key-hint-pill">␣ ${spaceKey}</span>`;
        } else {
          const tNext = hateLang === "ja" ? "次へ ➡" : hateLang === "en" ? "NEXT ➡" : "SIGUIENTE ➡";
          nextBtn.innerHTML = `${tNext} <span class="key-hint-pill">␣ ${spaceKey}</span>`;
        }
      }
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
    this._applyModalTranslations();
    const overlay = document.getElementById("hate-modal-overlay");
    if (!overlay) return;
    overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i === 0));
    overlay.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i === 0));
    const hateLang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
    const prevBtn = document.getElementById("btn-hate-prev");
    const nextBtn = document.getElementById("btn-hate-next");
    if (prevBtn) {
      prevBtn.style.visibility = "hidden";
      prevBtn.textContent = hateLang === "ja" ? "⬅ 戻る" : hateLang === "en" ? "⬅ BACK" : "⬅ ATRÁS";
    }
    if (nextBtn) {
      const tNext = hateLang === "ja" ? "次へ ➡" : hateLang === "en" ? "NEXT ➡" : "SIGUIENTE ➡";
      const spaceKey = hateLang === "ja" ? "スペース" : hateLang === "en" ? "SPACE" : "ESPACIO";
      nextBtn.innerHTML = `${tNext} <span class="key-hint-pill">␣ ${spaceKey}</span>`;
    }
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
      const s2Lang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
      const spaceKey = s2Lang === "ja" ? "スペース" : s2Lang === "en" ? "SPACE" : "ESPACIO";
      if (prevBtn) {
        prevBtn.style.visibility = this.s2Slide > 1 ? "visible" : "hidden";
        prevBtn.textContent = s2Lang === "ja" ? "⬅ 戻る" : s2Lang === "en" ? "⬅ BACK" : "⬅ ATRÁS";
      }
      if (nextBtn) {
        if (this.s2Slide === this.s2Max) {
          const tOk = s2Lang === "ja" ? "了解 ✕" : s2Lang === "en" ? "UNDERSTOOD ✕" : "ENTENDIDO ✕";
          nextBtn.innerHTML = `${tOk} <span class="key-hint-pill">␣ ${spaceKey}</span>`;
        } else {
          const tNext = s2Lang === "ja" ? "次へ ➡" : s2Lang === "en" ? "NEXT ➡" : "SIGUIENTE ➡";
          nextBtn.innerHTML = `${tNext} <span class="key-hint-pill">␣ ${spaceKey}</span>`;
        }
      }
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

    // Localize cancellation incident
    const s2Lang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
    if (s2Lang !== "es" && typeof getLocalizedCancellation === "function") {
      canc = getLocalizedCancellation(canc, s2Lang);
    }

    const s2Header = overlay.querySelector(".spec-label");
    if (s2Header) {
      s2Header.textContent = s2Lang === "ja" ? "🚨 セカンドストライク — 危機的警告 (2/3)" : s2Lang === "en" ? "🚨 SECOND STRIKE — CRITICAL ALERT (2/3)" : "🚨 SEGUNDO STRIKE — ALERTA CRÍTICA (2/3)";
    }

    // Populate slide 1 dynamically with the specific incident
    const slide1 = document.getElementById("s2-slide-1");
    if (slide1) {
      const displayTweet = canc.tweetReal || canc.texto;
      const tEscandalo = s2Lang === "ja" ? "スキャンダル:" : s2Lang === "en" ? "THE SCANDAL:" : "EL ESCÁNDALO:";
      const tSegundoStrike = s2Lang === "ja" ? "セカンドストライク" : s2Lang === "en" ? "SECOND STRIKE" : "SEGUNDO STRIKE";
      const tDefaultMotivo = s2Lang === "ja" ? "新たな問題行動により、アカウントへの通報が殺到しています。" : s2Lang === "en" ? "A new incident shook your timeline, triggering massive community reports against your account." : "Un nuevo incidente sacudió tu timeline y acumuló reportes masivos contra tu cuenta.";
      const tTweetLabel = s2Lang === "ja" ? "炎上の引き金となったポスト:" : s2Lang === "en" ? "The post that triggered it:" : "El tweet que lo desató:";
      const tweetLabel = canc.tweetReal ? `<div style="font-size:0.7rem;color:var(--gray-1);margin-bottom:3px;font-family:var(--font-mono);text-transform:uppercase;letter-spacing:0.5px;">${tTweetLabel}</div>` : "";
      slide1.innerHTML = `
        <h3>${tEscandalo} ${canc.titulo || tSegundoStrike} 🚨</h3>
        <p>${canc.motivo || tDefaultMotivo}</p>
        ${displayTweet ? `<div style="font-family:var(--font-mono); font-size:0.82rem; color:var(--gray-1); border-left:3px solid var(--red); padding:8px 12px; margin-top:4px;">${tweetLabel}"${displayTweet}"</div>` : ""}
      `;
    }

    // Localize slide 2 and slide 3
    const slide2 = document.getElementById("s2-slide-2");
    if (slide2) {
      if (s2Lang === "ja") {
        slide2.innerHTML = `
          <h3>最大警戒レベル: 2/3 ☠️</h3>
          <div class="strike-meter-row">
            <div class="strike-slot active-2">⚠️ ストライク 1</div>
            <div class="strike-slot active-2">🚨 ストライク 2 — 発動中</div>
            <div class="strike-slot danger-target">☠️ ストライク 3: 終了</div>
          </div>
          <p>あと1回のミスで、あなたのアカウントは<strong>永久凍結</strong>されます。次の規約違反で即時ゲームオーバーです。</p>
        `;
      } else if (s2Lang === "en") {
        slide2.innerHTML = `
          <h3>MAXIMUM DANGER: 2/3 ☠️</h3>
          <div class="strike-meter-row">
            <div class="strike-slot active-2">⚠️ STRIKE 1</div>
            <div class="strike-slot active-2">🚨 STRIKE 2 — ACTIVE</div>
            <div class="strike-slot danger-target">☠️ STRIKE 3: GAME OVER</div>
          </div>
          <p>Just one more violation and your account will be <strong>permanently suspended</strong>. The next strike means instant Game Over.</p>
        `;
      } else {
        slide2.innerHTML = `
          <h3>PELIGRO MÁXIMO: 2/3 ☠️</h3>
          <div class="strike-meter-row">
            <div class="strike-slot active-2">⚠️ STRIKE 1</div>
            <div class="strike-slot active-2">🚨 STRIKE 2 — ACTIVO</div>
            <div class="strike-slot danger-target">☠️ STRIKE 3: FIN</div>
          </div>
          <p>Un solo error más y tu cuenta queda <strong>suspendida de forma definitiva</strong>. La próxima infracción es Game Over inmediato.</p>
        `;
      }
    }

    const slide3 = document.getElementById("s2-slide-3");
    if (slide3) {
      if (s2Lang === "ja") {
        slide3.innerHTML = `
          <h3>サバイバルモード 🛡️</h3>
          <p>• <strong>口論、政治ポスト、釣り投稿</strong>は絶対に避けてください — ストライク発生率が極めて高くなります。</p>
          <p>• ヘイト値を下げメンタルを回復するために、<strong>デジタルデトックス</strong>や<strong>ミーム</strong>を活用しましょう。</p>
          <p>• バズりラッシュが発生した場合、3ツイートすべて成功させる自信がない限り<strong>拒否</strong>してください。</p>
        `;
      } else if (s2Lang === "en") {
        slide3.innerHTML = `
          <h3>SURVIVAL MODE 🛡️</h3>
          <p>• Avoid <strong>Fight, Politics, and Bait</strong> at all costs — their strike odds are extremely high.</p>
          <p>• Play <strong>Disconnect Day</strong> or <strong>Memes</strong> to drain Hate and restore Mental Health.</p>
          <p>• If a Viral Streak triggers, <strong>decline it</strong> unless you are 100% sure you can win all 3 tweets.</p>
        `;
      } else {
        slide3.innerHTML = `
          <h3>MODO SUPERVIVENCIA 🛡️</h3>
          <p>• Evitá <strong>Pelea, Política y Bait</strong> a cualquier costo — las chances de strike son altas.</p>
          <p>• Jugá <strong>Día de Desconexión</strong> o <strong>Memes</strong> para bajar el Odio y recuperar Salud Mental.</p>
          <p>• Si aparece una Racha Viral, <strong>no la aceptes</strong> salvo que estés segurx de ganar los 3 tweets.</p>
        `;
      }
    }

    overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i === 0));
    overlay.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i === 0));
    const prevBtn = document.getElementById("btn-s2-prev");
    const nextBtn = document.getElementById("btn-s2-next");
    if (prevBtn) {
      prevBtn.style.visibility = "hidden";
      prevBtn.textContent = s2Lang === "ja" ? "⬅ 戻る" : s2Lang === "en" ? "⬅ BACK" : "⬅ ATRÁS";
    }
    if (nextBtn) {
      const tNext = s2Lang === "ja" ? "次へ ➡" : s2Lang === "en" ? "NEXT ➡" : "SIGUIENTE ➡";
      const spaceKey = s2Lang === "ja" ? "スペース" : s2Lang === "en" ? "SPACE" : "ESPACIO";
      nextBtn.innerHTML = `${tNext} <span class="key-hint-pill">␣ ${spaceKey}</span>`;
    }
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

    // Localize
    const cgoLang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
    if (cgoLang !== "es" && typeof getLocalizedCancellation === "function") {
      canc = getLocalizedCancellation(canc, cgoLang);
    }

    const headerEl = overlay.querySelector(".spec-label");
    if (headerEl) {
      headerEl.textContent = cgoLang === "ja" ? "☠️ アカウント永久凍結" : cgoLang === "en" ? "☠️ ACCOUNT PERMANENTLY SUSPENDED" : "☠️ CUENTA SUSPENDIDA DEFINITIVAMENTE";
    }

    const titleEl  = document.getElementById("cgo-title");
    const reasonEl = document.getElementById("cgo-reason");
    const tweetEl  = document.getElementById("cgo-tweet");

    let finalTitle = canc?.titulo;
    let finalMotivo = canc?.motivo;

    // Handle special ad-hoc game over modals (hate max / chronic toxicity / failed viral streak)
    if (finalTitle === "HOSTILIDAD EXTREMA — CUENTA CERRADA") {
      if (cgoLang === "ja") {
        finalTitle = "極限のヘイト — アカウント永久凍結";
        finalMotivo = "ヘイト値が100%に達しました。プラットフォームはあなたのアカウントを公共の脅威と判断し即座に永久凍結しました。";
      } else if (cgoLang === "en") {
        finalTitle = "EXTREME HOSTILITY — ACCOUNT SUSPENDED";
        finalMotivo = "Your Hate reached 100%. The platform deemed your account a public hazard and permanently banned you.";
      }
    } else if (finalTitle === "TOXICIDAD CRÓNICA — EXPULSIÓN FORZADA") {
      if (cgoLang === "ja") {
        finalTitle = "慢性的有害性 — 強制追放";
        finalMotivo = "3ターン連続でヘイト値が危険水域に留まりました。モデレーターによりアカウントが強制閉鎖されました。";
      } else if (cgoLang === "en") {
        finalTitle = "CHRONIC TOXICITY — FORCED EXPULSION";
        finalMotivo = "Your Hate stayed in the red zone for 3 consecutive turns. Moderators terminated your profile.";
      }
    } else if (finalTitle === "RACHA VIRAL FALLIDA — CUENTA SUSPENDIDA") {
      if (cgoLang === "ja") {
        finalTitle = "バズりラッシュ失敗 — アカウント凍結";
        finalMotivo = "資金を失い、さらに2回のストライクを受けました。モデレーターによりアカウントが永久凍結されました。";
      } else if (cgoLang === "en") {
        finalTitle = "FAILED VIRAL STREAK — ACCOUNT SUSPENDED";
        finalMotivo = "You lost funds and accumulated 2 extra strikes. The moderators suspended your account permanently.";
      }
    }

    const defaultTitle = cgoLang === "ja" ? "アカウント永久凍結" : cgoLang === "en" ? "ACCOUNT PERMANENTLY SUSPENDED" : "CUENTA SUSPENDIDA DEFINITIVAMENTE";
    if (titleEl)  titleEl.textContent  = finalTitle  || defaultTitle;
    if (reasonEl) reasonEl.textContent = finalMotivo || "";
    const displayTweet = canc?.tweetReal || canc?.texto;
    if (tweetEl) {
      if (displayTweet) {
        const label = canc?.tweetReal ? (cgoLang === "ja" ? "炎上の引き金となったポスト:\n" : cgoLang === "en" ? "The post that triggered it:\n" : "El tweet que lo desató:\n") : "";
        tweetEl.textContent = label + `"${displayTweet}"`;
        tweetEl.style.display = "block";
      } else {
        tweetEl.textContent = "";
        tweetEl.style.display = "none";
      }
    }

    const btnOk = document.getElementById("btn-cgo-ok");
    if (btnOk) {
      btnOk.textContent = cgoLang === "ja" ? "最終リザルトを見る ☠️" : cgoLang === "en" ? "VIEW FINAL STATS ☠️" : "VER ESTADÍSTICAS FINALES ☠️";
    }

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
    this._applyModalTranslations();
    const overlay = document.getElementById("viral-modal-overlay");
    if (!overlay) return;
    overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i === 0));
    overlay.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i === 0));
    const prevBtn = document.getElementById("btn-viral-prev");
    const nextBtn = document.getElementById("btn-viral-next");
    if (prevBtn) prevBtn.style.visibility = "hidden";
    if (nextBtn) {
      nextBtn.style.display = "block";
      const lang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
      const spaceLabel = lang === "ja" ? "スペース" : lang === "en" ? "SPACE" : "ESPACIO";
      const tNext = typeof i18n !== "undefined" ? i18n.t("tutorial.next", null, "SIGUIENTE ➡") : "SIGUIENTE ➡";
      nextBtn.innerHTML = tNext + ` <span class="key-hint-pill">␣ ${spaceLabel}</span>`;
    }
    snd.alert();
    overlay.classList.add("active");
  }

  _setupStoryUnlockModal() {
    this.storySlide = 1;
    this.storyMax = 3;
    const overlay = document.getElementById("story-unlock-modal-overlay");
    if (!overlay) return;

    const updateStory = () => {
      overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i + 1 === this.storySlide));
      overlay.querySelectorAll("#story-dots .dot").forEach((d, i) => d.classList.toggle("active", i + 1 === this.storySlide));
      const prevBtn = document.getElementById("btn-story-prev");
      const nextBtn = document.getElementById("btn-story-next");
      const nav = document.getElementById("story-modal-nav");
      if (prevBtn) prevBtn.style.visibility = this.storySlide > 1 ? "visible" : "hidden";
      if (nextBtn) nextBtn.style.display = this.storySlide === this.storyMax ? "none" : "inline-flex";
      if (nav) nav.style.display = this.storySlide === this.storyMax ? "none" : "flex";
    };

    document.getElementById("btn-story-next")?.addEventListener("click", () => {
      snd.click();
      if (this.storySlide < this.storyMax) {
        this.storySlide++;
        updateStory();
      }
    });

    document.getElementById("btn-story-prev")?.addEventListener("click", () => {
      snd.click();
      if (this.storySlide > 1) {
        this.storySlide--;
        updateStory();
      }
    });

    document.getElementById("btn-story-unlock-ok")?.addEventListener("click", () => {
      snd.click();
      overlay.classList.remove("active");
      this.eng.storyModeActivated = true;
    });
  }

  _openStoryUnlockModal() {
    this.storySlide = 1;
    const overlay = document.getElementById("story-unlock-modal-overlay");
    if (!overlay) return;
    overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i === 0));
    overlay.querySelectorAll("#story-dots .dot").forEach((d, i) => d.classList.toggle("active", i === 0));
    const prevBtn = document.getElementById("btn-story-prev");
    const nextBtn = document.getElementById("btn-story-next");
    const nav = document.getElementById("story-modal-nav");
    if (prevBtn) prevBtn.style.visibility = "hidden";
    if (nextBtn) nextBtn.style.display = "inline-flex";
    if (nav) nav.style.display = "flex";

    snd.dramaticBraam();
    this._applyModalTranslations();
    overlay.classList.add("active");
  }

  _setupFullscreenControls() {
    const toggleFullscreen = () => {
      snd.click();
      const doc = document;
      const docEl = document.documentElement;
      const isFullscreen = doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement;

      if (!isFullscreen) {
        const req = docEl.requestFullscreen || docEl.webkitRequestFullscreen || docEl.mozRequestFullScreen || docEl.msRequestFullscreen;
        if (req) {
          req.call(docEl).catch(err => {
            console.warn("Fullscreen request error:", err);
          });
        } else {
          // Fallback iOS Safari: mostrar sugerencia amigable
          this.showAlert(
            "PANTALLA COMPLETA EN iOS",
            "Apple bloquea la pantalla completa directa en navegadores móviles. Para jugarlo en pantalla completa en iPhone o iPad, tocá el botón Compartir de Safari y elegí 'Agregar al inicio'.",
            false,
            null,
            "📱"
          );
        }
      } else {
        const exit = doc.exitFullscreen || doc.webkitExitFullscreen || doc.mozCancelFullScreen || doc.msExitFullscreen;
        if (exit) {
          exit.call(doc).catch(err => console.warn(err));
        }
      }
    };

    const btnSplash = document.getElementById("btn-fullscreen-splash");
    if (btnSplash) btnSplash.onclick = toggleFullscreen;

    const btnGame = document.getElementById("btn-fullscreen-game");
    if (btnGame) btnGame.onclick = toggleFullscreen;
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

  _detectUserLanguage() {
    try {
      const saved = localStorage.getItem("twitero_preferred_lang");
      if (saved) return saved;

      const navLang = (navigator.languages && navigator.languages[0]) || navigator.language || "";
      const langCode = navLang.toLowerCase().split("-")[0];
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";

      // Detección Japón
      if (langCode === "ja" || tz.includes("Tokyo") || tz.includes("Japan")) {
        return "ja";
      }

      // Países de habla hispana
      const spanishLangs = ["es"];
      const spanishTzKeywords = [
        "Argentina", "Buenos_Aires", "Cordoba", "Santiago", "Montevideo", "Asuncion",
        "Lima", "Bogota", "Caracas", "La_Paz", "Mexico", "Cancun", "Merida", "Monterrey",
        "Guatemala", "Costa_Rica", "Panama", "El_Salvador", "Tegucigalpa", "Managua",
        "Madrid", "Ceuta", "Canary", "Havana", "Santo_Domingo", "Puerto_Rico", "Guayaquil", "Quito"
      ];

      if (spanishLangs.includes(langCode) || spanishTzKeywords.some(k => tz.includes(k))) {
        return "es";
      }

      // Por defecto para el resto del mundo no-hispano: inglés
      return "en";
    } catch (e) {
      return "es";
    }
  }

  _setupLanguageDropdown() {
    const btn = document.getElementById("lang-dropdown-btn");
    const menu = document.getElementById("lang-dropdown-menu");
    if (!btn || !menu) return;

    // Detectar idioma inicial
    const currentLang = this._detectUserLanguage();
    const langData = {
      es: { flag: "🇪🇸", name: "Español" },
      en: { flag: "🇬🇧", name: "English" },
      ja: { flag: "🇯🇵", name: "日本語" }
    };

    const updateBtn = (code) => {
      const item = langData[code] || langData.es;
      btn.innerHTML = `<span class="lang-flag">${item.flag}</span><span class="lang-name">${item.name}</span><span class="lang-arrow">▾</span>`;
      if (window.twemoji) {
        window.twemoji.parse(btn);
      }
    };

    if (window.twemoji) {
      window.twemoji.parse(menu);
    }

    if (currentLang && langData[currentLang]) {
      updateBtn(currentLang);
      menu.querySelectorAll(".lang-opt").forEach(opt => {
        const isSelected = opt.dataset.lang === currentLang;
        opt.classList.toggle("active", isSelected);
      });
      if (typeof i18n !== "undefined" && i18n.getLanguage() !== currentLang) {
        i18n.setLanguage(currentLang);
      }
    }

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
        try { localStorage.setItem("twitero_preferred_lang", lang); } catch(_) {}
        if (typeof i18n !== "undefined") {
          i18n.setLanguage(lang);
        }
        updateBtn(lang);
        menu.querySelectorAll(".lang-opt").forEach(o => o.classList.toggle("active", o.dataset.lang === lang));
        this.applyTranslations();
      };
    });
  }

  applyTranslations() {
    if (typeof i18n === "undefined") return;
    const t = (k, p, d) => i18n.t(k, p, d);
    const lang = i18n.getLanguage();

    // ── Splash image swap based on language ──────────────────────────────
    const splashImg = document.getElementById("splash-hero-img");
    if (splashImg) {
      splashImg.src = lang === "ja" ? "splash JAP.jpg" : "splash.jpg";
    }

    // Splash texts
    const splashIntro = document.querySelector(".splash-intro-text");
    if (splashIntro) splashIntro.textContent = t("splash.tagline");

    const btnStart = document.getElementById("btn-start");
    if (btnStart) btnStart.textContent = t("splash.start_btn");

    const btnSplashRanking = document.getElementById("btn-splash-ranking");
    if (btnSplashRanking) btnSplashRanking.textContent = t("splash.fame_btn");

    const btnFullscreenSplash = document.getElementById("btn-fullscreen-splash");
    if (btnFullscreenSplash) btnFullscreenSplash.textContent = t("splash.fullscreen");

    // Rotate overlay texts
    const rotTitle = document.querySelector(".rotate-title");
    if (rotTitle) rotTitle.textContent = t("rotate.title");
    const rotDesc = document.querySelector(".rotate-desc");
    if (rotDesc) rotDesc.innerHTML = t("rotate.desc");
    const rotPill = document.querySelector(".rotate-pill");
    if (rotPill) rotPill.textContent = t("rotate.pill");

    // Dashboard: Topbar and Section Titles
    const topbarTitle = document.getElementById("topbar-title");
    if (topbarTitle) topbarTitle.textContent = t("dashboard.timeline_title", null, "🐦 TIMELINE DEL DÍA");

    const cardsTitle = document.getElementById("cards-section-title");
    if (cardsTitle) cardsTitle.textContent = t("cards.section_title", null, "TUITS DISPONIBLES");

    const cardsSubtitle = document.getElementById("cards-subtitle");
    if (cardsSubtitle) cardsSubtitle.textContent = t("cards.section_sub", null, "SELECCIONÁ UNA CARTA PARA PUBLICAR ESTE TURNO");

    const boosterSecTitle = document.querySelector("#boosters-section .section-title-standard");
    if (boosterSecTitle) boosterSecTitle.textContent = t("shop.section_title", null, "BOOSTERS DISPONIBLES");

    const boosterSecSub = document.querySelector("#boosters-section .sub");
    if (boosterSecSub) boosterSecSub.textContent = t("shop.section_sub", null, "ACTIVA UN BOOSTER PARA MULTIPLICAR EL EFECTO DE TU PRÓXIMO TWEET");

    // Dashboard: Sidebar Labels and Buttons
    const statRows = document.querySelectorAll(".stat-row-compact");
    if (statRows.length >= 4) {
      const lblSegs = statRows[0]?.querySelector(".stat-row-label");
      if (lblSegs) lblSegs.textContent = t("dashboard.followers", null, "SEGUIDORES");

      const lblDin = statRows[1]?.querySelector(".stat-row-label");
      if (lblDin) {
        const paySpan = document.getElementById("stat-payout-label");
        const payHtml = paySpan ? paySpan.outerHTML : '<span class="sv" id="stat-payout-label" style="color:var(--green)">+~$500/T</span>';
        lblDin.innerHTML = `${t("dashboard.money", null, "DINERO")} ${payHtml}`;
      }

      const lblSm = statRows[2]?.querySelector(".stat-row-label");
      if (lblSm) {
        const smSpan = document.getElementById("stat-sm-val");
        const smHtml = smSpan ? smSpan.outerHTML : '<span class="sv" id="stat-sm-val">100%</span>';
        lblSm.innerHTML = `${t("dashboard.mental_health", null, "SALUD MENTAL")} ${smHtml}`;
      }

      const lblLoveHate = statRows[3]?.querySelector(".stat-row-label");
      if (lblLoveHate) lblLoveHate.textContent = t("dashboard.love_hate", null, "AMOR / ODIO");
    }

    // ── Sidebar tooltips ─────────────────────────────────────────────────
    const sidebarFollowers = document.querySelector(".stat-followers-box, [data-stat='followers']");
    if (sidebarFollowers) sidebarFollowers.setAttribute("data-tooltip", t("dashboard.tooltips.followers", null, "SEGUIDORES: tu audiencia acumulada."));
    const sidebarCash = document.querySelector(".stat-cash-box, [data-stat='cash']");
    if (sidebarCash) sidebarCash.setAttribute("data-tooltip", t("dashboard.tooltips.cash", null, "DINERO: saldo disponible."));

    const btnVerPerfil = document.getElementById("btn-ver-perfil");
    if (btnVerPerfil) btnVerPerfil.textContent = t("dashboard.view_profile", null, "📋 VER PERFIL COMPLETO");

    const btnShortcuts = document.getElementById("btn-ver-shortcuts");
    if (btnShortcuts) btnShortcuts.textContent = t("dashboard.shortcuts", null, "⌨️ ATAJOS DE TECLADO");

    const btnAudioModal = document.getElementById("btn-open-audio-modal");
    if (btnAudioModal) btnAudioModal.textContent = t("dashboard.audio_opts", null, "🎧 OPCIONES DE AUDIO");

    // ── Audio Modal ───────────────────────────────────────────────────────
    const audioModalSpec = document.querySelector("#audio-modal-overlay .spec-label");
    if (audioModalSpec) audioModalSpec.textContent = t("audio.title", null, "🎧 OPCIONES DE AUDIO");
    const audioMusicLabel = document.querySelector("#audio-modal-overlay .audio-row-label span:last-child, .audio-music-label");
    if (audioMusicLabel) audioMusicLabel.textContent = t("audio.music", null, "🎵 MÚSICA");
    const audioSfxLabel = document.querySelector(".audio-sfx-label");
    if (audioSfxLabel) audioSfxLabel.textContent = t("audio.sfx", null, "🔔 EFECTOS DE SONIDO");
    const audioOkBtn = document.getElementById("btn-audio-modal-ok");
    if (audioOkBtn) audioOkBtn.innerHTML = `${t("audio.ok", null, "LISTO")} <span class="key-hint-pill">⎵ ${lang === "ja" ? "スペース" : lang === "en" ? "SPACE" : "ESPACIO"}</span>`;

    // ── Ranking Modal ─────────────────────────────────────────────────────
    const rankingSpec = document.querySelector("#ranking-modal-overlay .spec-label");
    if (rankingSpec) rankingSpec.textContent = t("ranking.title", null, "🏆 SALÓN DE LA FAMA // LEADERBOARD");
    const rankingDaily = document.querySelector("#ranking-modal-overlay .ranking-col-title:first-of-type");
    if (rankingDaily) rankingDaily.textContent = t("ranking.daily", null, "📅 TOP 10 DE HOY (DIARIO)");
    const rankingAlltime = document.querySelector("#ranking-modal-overlay .ranking-col-title:last-of-type");
    if (rankingAlltime) rankingAlltime.textContent = t("ranking.alltime", null, "🏆 TOP 10 HISTÓRICO (ALL-TIME)");
    const rankingClose = document.getElementById("btn-ranking-ok");
    if (rankingClose) rankingClose.textContent = t("ranking.close", null, "CERRAR ✕");

    // ── Ranking Prompt (handle input before ranking) ──────────────────────
    const rankingPromptH3 = document.querySelector("#ranking-prompt-overlay h3");
    if (rankingPromptH3) rankingPromptH3.textContent = t("ranking_prompt.title", null, "¡PARTIDA COMPLETADA!");
    const rankingPromptP = document.querySelector("#ranking-prompt-overlay p");
    if (rankingPromptP) rankingPromptP.textContent = t("ranking_prompt.subtitle", null, "Ingresá tu @ para entrar al Salón de la Fama");
    const rankingSubmit = document.getElementById("btn-ranking-prompt-submit");
    if (rankingSubmit) rankingSubmit.textContent = t("ranking_prompt.submit", null, "⚡ ENTRAR AL SALÓN");

    // ── Mobile Boosters Drawer ────────────────────────────────────────────
    const mobileBooSpec = document.querySelector("#mobile-boosters-overlay .spec-label");
    if (mobileBooSpec) mobileBooSpec.textContent = t("mobile_boosters.title", null, "🚀 TIENDA DE BOOSTERS");
    const mobileBooSub = document.querySelector(".mobile-boosters-subtitle");
    if (mobileBooSub) mobileBooSub.textContent = t("mobile_boosters.subtitle", null, "Tocá un booster para activarlo o desactivarlo para tu próximo tweet:");
    const mobileBooReady = document.getElementById("btn-mobile-boosters-ready");
    if (mobileBooReady) mobileBooReady.textContent = t("mobile_boosters.ready", null, "LISTO PARA TUITEAR ▶");

    // ── Alert overlay OK button ───────────────────────────────────────────
    const alertOkBtn = document.getElementById("alert-ok-btn");
    if (alertOkBtn) alertOkBtn.innerHTML = `${t("shop.ok", null, "[ ENTENDIDO ]")} <span class="key-hint-pill">⎵ ${lang === "ja" ? "スペース" : lang === "en" ? "SPACE" : "ESPACIO"}</span>`;

    // End Screens
    const end1Badge = document.querySelector("#screen-end1 .end-game-badge");
    if (end1Badge) end1Badge.textContent = t("end.game_over", null, "🏆 FINAL DEL JUEGO 🏆");

    const spaceLabel = lang === "ja" ? "スペース" : lang === "en" ? "SPACE" : "ESPACIO";
    const end1Restart = document.getElementById("btn-end1-restart");
    if (end1Restart) end1Restart.innerHTML = `${t("end.replay", null, "▶ JUGAR DE NUEVO")} <span class="key-hint-pill">␣ ${spaceLabel}</span>`;

    const end1Ranking = document.getElementById("btn-end1-ranking");
    if (end1Ranking) end1Ranking.textContent = t("end.ranking", null, "🏆 Ranking");

    const end1Tree = document.getElementById("btn-end1-tree");
    if (end1Tree) end1Tree.textContent = t("end.tree", null, "🌳 Árbol de Decisiones");

    const end1Share = document.getElementById("btn-end1-share");
    if (end1Share) end1Share.textContent = t("end.share", null, "🐦 Compartir en X");

    const nextEnd = document.getElementById("btn-next-end");
    if (nextEnd) nextEnd.textContent = t("end.evolution", null, "📊 Evolución en Turnos");

    const cafecito = document.getElementById("btn-cafecito-link");
    if (cafecito) cafecito.textContent = t("end.cafecito", null, "☕ Invitame un Cafecito");

    const colTitle = document.querySelector("#screen-end1 .collection-title");
    if (colTitle) colTitle.textContent = t("end.collection_title", null, "🏆 COLECCIÓN DE FINALES");

    const end2Back = document.getElementById("btn-end2-back");
    if (end2Back) end2Back.textContent = t("tutorial.prev", null, "⬅ ATRÁS");

    // End2 buttons (turn evolution screen)
    const end2TreeBtn = document.getElementById("btn-end2-tree");
    if (end2TreeBtn) end2TreeBtn.textContent = t("end2.tree_btn", null, "🌳 Ver Árbol");
    const end2ShareBtn = document.getElementById("btn-end2-share");
    if (end2ShareBtn) end2ShareBtn.textContent = t("end2.share_btn", null, "🐦 Compartir en X");
    const end2RankingBtn = document.getElementById("btn-end2-ranking");
    if (end2RankingBtn) end2RankingBtn.textContent = t("end2.ranking_btn", null, "🏆 Salón de la Fama");
    const end2CopyBtn = document.getElementById("btn-copy-report");
    if (end2CopyBtn && !end2CopyBtn.classList.contains("copied")) end2CopyBtn.textContent = t("end2.copy_btn", null, "📋 Copy Report");
    const end2CafecitoBtnE2 = document.getElementById("btn-end2-cafecito");
    if (end2CafecitoBtnE2) end2CafecitoBtnE2.textContent = t("end2.cafecito_btn", null, "☕ Invitar un Cafecito");
    const end2CreatedBy = document.querySelector(".end2-credits-label");
    if (end2CreatedBy) end2CreatedBy.textContent = t("end2.created_by", null, "Creado por");

    const playAgain = document.getElementById("btn-play-again");
    if (playAgain) playAgain.textContent = t("end.replay", null, "▶ JUGAR DE NUEVO");

    const copyRep = document.getElementById("btn-copy-report");
    if (copyRep && !copyRep.classList.contains("copied")) copyRep.textContent = t("end.copy_report", null, "📋 COPIAR REPORTE");

    // Re-render setup screens so they reflect the new language immediately
    this._gender();
    this._archetype();
    this._personality();

    const activeScreen = document.querySelector(".screen.active");
    if (activeScreen && activeScreen.id === "screen-game") {
      this._updateStatsOnly();
      this._renderCards();
      this._renderBoosters();
    }

    // Update tutorial and help modals
    if (typeof this._applyModalTranslations === "function") this._applyModalTranslations();
  }

  _setupGlobalTooltips() {
    const tt=document.getElementById("global-tooltip"); if(!tt) return;
    // En dispositivos táctiles no hay hover real; ignorar para evitar tooltips pegados
    if (window.matchMedia && window.matchMedia("(hover: none)").matches) return;
    document.addEventListener("touchstart", () => { tt.classList.remove("active"); }, { passive: true });
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
    const closeAlert = () => {
      overlay.classList.remove("active");
      if(this._onAlertDismiss) {
        const cb = this._onAlertDismiss;
        this._onAlertDismiss = null;
        cb();
      }
    };

    const okBtn=document.getElementById("alert-ok-btn");
    if(okBtn) {
      const lang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
      const spaceLabel = lang === "ja" ? "スペース" : lang === "en" ? "SPACE" : "ESPACIO";
      const okText = typeof i18n !== "undefined" ? i18n.t("shop.ok", null, "[ ENTENDIDO ]") : "[ ENTENDIDO ]";
      okBtn.innerHTML = `${okText} <span class="key-hint-pill">⎵ ${spaceLabel}</span>`;
      okBtn.onclick = closeAlert;
    }

    const closeBtn=document.getElementById("btn-close-alert");
    if(closeBtn) closeBtn.onclick = closeAlert;

    overlay.onclick = (e) => {
      if (e.target === overlay) closeAlert();
    };
  }

  _gender() {
    const t = (k, p, d) => (typeof i18n !== "undefined" ? i18n.t(k, p, d) : d);
    const backBtn = document.getElementById("btn-back-gender");
    if (backBtn) {
      backBtn.textContent = t("setup.back_btn", null, "← VOLVER AL INICIO");
      backBtn.onclick = () => {
        snd.click();
        this.showScreen("screen-splash");
      };
    }
    const headTitle = document.querySelector("#screen-gender .sel-header h1");
    if (headTitle) headTitle.textContent = t("setup.gender_title", null, "Selección de Género");
    const headSub = document.querySelector("#screen-gender .step-label");
    if (headSub) headSub.textContent = t("setup.step", { current: "01", total: "03" }, "PASO 01 / 03") + " — " + t("setup.gender_subtitle", null, "DEFINICIÓN DE PRONOMBRES");

    const grid=document.getElementById("gender-grid"); if(!grid) return;
    const opts=[
      {id:"hombre",icon:"👨",name:t("setup.male", null, "Hombre"),desc:t("setup.male_desc", null, "Pronombres masculinos."),meta:t("setup.male_meta", null, "PRON: ÉL / HE")},
      {id:"mujer",icon:"👩",name:t("setup.female", null, "Mujer"),desc:t("setup.female_desc", null, "Pronombres femeninos."),meta:t("setup.female_meta", null, "PRON: ELLA / SHE")},
      {id:"diverso",icon:"🧑",name:t("setup.non_binary", null, "Diverso"),desc:t("setup.nb_desc", null, "Lenguaje neutro."),meta:t("setup.nb_meta", null, "PRON: ELLE / THEY")}
    ];
    grid.innerHTML=opts.map(o=>`<div class="sel-card" data-id="${o.id}"><div class="sc-icon-wrap">${o.icon}</div><div class="sc-name">${o.name}</div><div class="sc-desc">${o.desc}</div><div class="sc-meta">${o.meta}</div></div>`).join("");
    grid.querySelectorAll(".sel-card").forEach(c=>{ c.onclick=()=>{ snd.click(); this.sel.genero=c.dataset.id; this.showScreen("screen-archetype"); }; });
  }

  _archetype() {
    const t = (k, p, d) => (typeof i18n !== "undefined" ? i18n.t(k, p, d) : d);
    const backBtn = document.getElementById("btn-back-archetype");
    if (backBtn) {
      backBtn.textContent = t("setup.back_btn", null, "← VOLVER A GÉNERO");
      backBtn.onclick = () => {
        snd.click();
        this.showScreen("screen-gender");
      };
    }
    const headTitle = document.querySelector("#screen-archetype .sel-header h1");
    if (headTitle) headTitle.textContent = t("setup.archetype_title", null, "Selección de Arquetipo");
    const headSub = document.querySelector("#screen-archetype .step-label");
    if (headSub) headSub.textContent = t("setup.step", { current: "02", total: "03" }, "PASO 02 / 03") + " — " + t("setup.archetype_subtitle", null, "IDENTIDAD EN TWITTER · 12 DISPONIBLES");

    const grid=document.getElementById("archetype-grid"); if(!grid) return;
    grid.innerHTML=ARCHETYPES.map(a=>{
      const isAvailable = typeof isArchetypeAvailableForGender === "function"
        ? isArchetypeAvailableForGender(a.id, this.sel.genero)
        : true;
      const archTransName = (typeof i18n !== "undefined") ? i18n.t("archetypes." + a.id + ".nombre", null, null) : null;
      const archTransDesc = (typeof i18n !== "undefined") ? i18n.t("archetypes." + a.id + ".desc", null, null) : null;
      const archTransDif = (typeof i18n !== "undefined") ? i18n.t("archetypes." + a.id + ".dif", null, null) : null;
      const genderedName = (typeof i18n !== "undefined" && i18n.getLanguage() !== "es" && archTransName)
        ? archTransName
        : getGenderedArchetype(a, this.sel.genero);
      const difClass = a.dificultad === "alta" ? "chip-dif-alta" : a.dificultad === "media" ? "chip-dif-media" : "chip-dif-baja";
      const difBadge = `<span class="chip-dif ${difClass}">${archTransDif || ("DIFICULTAD " + (a.difLabel || "MEDIA"))}</span>`;
      const lang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
      const afinesHtml = (a.afines || []).map(f => {
        const fName = (typeof i18n !== "undefined" && i18n.t("cards.palo_" + f)) || (CARD_PALOS[f]?.nombre || f);
        return `<span class="chip-afin">${CARD_PALOS[f]?.icono || "⭐"} ${fName}</span>`;
      }).join("");
      const debilesHtml = (a.debiles || []).map(f => {
        const fName = (typeof i18n !== "undefined" && i18n.t("cards.palo_" + f)) || (CARD_PALOS[f]?.nombre || f);
        return `<span class="chip-debil">${CARD_PALOS[f]?.icono || "💀"} ${fName}</span>`;
      }).join("");
      let passiveText = "";
      if (lang === "en") {
        passiveText = (a.bajomon ? "Low Monetization · " : "") + (a.odioRed ? "Reduced Hate" : "");
      } else if (lang === "ja") {
        passiveText = (a.bajomon ? "収益化低下 · " : "") + (a.odioRed ? "ヘイト上昇抑制" : "");
      } else {
        passiveText = a.difDesc || (a.bajomon ? "Bajo Monetize · " : "") + (a.odioRed ? "Odio Reducido" : "");
      }
      const archDesc = (typeof i18n !== "undefined" && i18n.getLanguage() !== "es" && archTransDesc)
        ? archTransDesc
        : (typeof getGenderedArchetypeDesc === "function" ? getGenderedArchetypeDesc(a, this.sel.genero) : a.desc);

      // Tooltip: if locked, show which gender unlocks it
      let lockHint = "";
      if (!isAvailable) {
        const unlockGenders = ["hombre","mujer","diverso"].filter(g => {
          const allowed = (typeof ARCHETYPE_GENDER_RESTRICTIONS !== "undefined") ? ARCHETYPE_GENDER_RESTRICTIONS[g] : [];
          return allowed && allowed.includes(a.id);
        }).map(g => {
          if (lang === "ja") return g === "hombre" ? "男性" : g === "mujer" ? "女性" : "ノンバイナリー";
          if (lang === "en") return g === "hombre" ? "He/Him" : g === "mujer" ? "She/Her" : "They/Them";
          return g === "hombre" ? "Él" : g === "mujer" ? "Ella" : "Elle";
        });
        const lockPrefix = lang === "ja" ? "🔒 解放条件: " : lang === "en" ? "🔒 Only available for: " : "🔒 Solo disponible para: ";
        lockHint = `<div style='margin-top:6px;color:var(--red);font-size:0.75rem;font-weight:700;'>${lockPrefix}${unlockGenders.join(", ")}</div>`;
      }
      const tip = `<strong>${a.icono} ${genderedName.toUpperCase()}</strong><br><div style='margin:6px 0;'>${difBadge}</div>${archDesc}<br><div style='margin-top:6px;display:flex;flex-wrap:wrap;gap:4px;'>${afinesHtml}${debilesHtml}</div>${passiveText ? `<div style='margin-top:6px;color:var(--blue);font-size:0.75rem;'>${passiveText}</div>` : ''}${lockHint}`.replace(/"/g, '&quot;');

      const lockedClass = isAvailable ? "" : " sel-card-locked";
      const lockedBadge = isAvailable ? "" : `<div class="locked-badge-x">❌</div>`;

      return `<div class="sel-card sel-card-clean${lockedClass}" data-id="${a.id}" data-tooltip="${tip}" data-locked="${isAvailable ? "0" : "1"}">
        ${lockedBadge}
        <div class="sc-icon-wrap">${a.icono}</div>
        <div class="sc-name">${genderedName}</div>
        <div class="sc-desc">${archDesc}</div>
      </div>`;
    }).join("");
    grid.querySelectorAll(".sel-card:not(.sel-card-locked)").forEach(c=>{
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
    const t = (k, p, d) => (typeof i18n !== "undefined" ? i18n.t(k, p, d) : d);
    const backBtn = document.getElementById("btn-back-personality");
    if (backBtn) {
      backBtn.textContent = t("setup.back_btn", null, "← VOLVER A ARQUETIPOS");
      backBtn.onclick = () => {
        snd.click();
        this.showScreen("screen-archetype");
      };
    }
    const headTitle = document.querySelector("#screen-personality .sel-header h1");
    if (headTitle) headTitle.textContent = t("setup.personality_title", null, "Personalidad & Cuenta");
    const headSub = document.querySelector("#screen-personality .step-label");
    if (headSub) headSub.textContent = t("setup.step", { current: "03", total: "03" }, "PASO 03 / 03") + " — " + t("setup.personality_subtitle", null, "ESTRATEGIA Y NOMBRE DE USUARIO");

    const handleLbl = document.querySelector("#screen-personality .handle-label");
    if (handleLbl) handleLbl.textContent = "// " + t("setup.handle_title", null, "TU @HANDLE EN X (TWITTER) — EDITABLE:") + ":";
    const handleInput = document.getElementById("user-handle-input");
    if (handleInput) handleInput.placeholder = t("setup.handle_placeholder", null, "tu_cuenta");

    const lang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
    const grid = document.getElementById("personality-grid"); if (!grid) return;
    grid.innerHTML=PERSONALITIES.map(p=>{
      const persTransName = (typeof i18n !== "undefined") ? i18n.t("personalities." + p.id + ".nombre", null, null) : null;
      const persTransDesc = (typeof i18n !== "undefined") ? i18n.t("personalities." + p.id + ".desc", null, null) : null;
      const persTransRiesgo = (typeof i18n !== "undefined") ? i18n.t("personalities." + p.id + ".riesgo", null, null) : null;
      const persTransRetorno = (typeof i18n !== "undefined") ? i18n.t("personalities." + p.id + ".retorno", null, null) : null;
      const persTransBonus = (typeof i18n !== "undefined") ? i18n.t("personalities." + p.id + ".bonus", null, null) : null;
      const persTransMalus = (typeof i18n !== "undefined") ? i18n.t("personalities." + p.id + ".malus", null, null) : null;

      const persName = (lang !== "es" && persTransName) ? persTransName : p.nombre;
      const persDesc = (lang !== "es" && persTransDesc)
        ? persTransDesc
        : (typeof getGenderedPersonalityDesc === "function" ? getGenderedPersonalityDesc(p, this.sel.genero) : p.desc);
      const riesgoVal = (persTransRiesgo || p.riesgo || "").toUpperCase();
      const retornoVal = (persTransRetorno || p.retorno || "").toUpperCase();
      const bonusVal = persTransBonus || p.bonus;
      const malusVal = persTransMalus || p.malus;

      const riskLabel = lang === "ja" ? "リスク" : lang === "en" ? "RISK" : "RIESGO";
      const returnLabel = lang === "ja" ? "リターン" : lang === "en" ? "RETURN" : "RETORNO";

      const tip = `<strong>${p.icono} ${persName.toUpperCase()}</strong><br>${persDesc}<br><div style='margin-top:6px;color:var(--blue);font-family:var(--font-mono);font-size:0.75rem;'>${riskLabel}: ${riesgoVal} · ${returnLabel}: ${retornoVal}</div>${bonusVal ? `<div style='color:var(--green);font-size:0.72rem;margin-top:2px;'>+ ${bonusVal}</div>` : ''}${malusVal ? `<div style='color:var(--red);font-size:0.72rem;'>- ${malusVal}</div>` : ''}`.replace(/"/g, '&quot;');

      return `<div class="sel-card sel-card-clean" data-id="${p.id}" data-tooltip="${tip}">
        <div class="sc-icon-wrap">${p.icono}</div>
        <div class="sc-name">${persName}</div>
        <div class="sc-desc">${persDesc}</div>
      </div>`;
    }).join("");

    grid.querySelectorAll(".sel-card").forEach(c=>{
      c.onclick=()=>{
        snd.click();
        this.sel.pers=c.dataset.id;
        const handleInput = document.getElementById("user-handle-input");
        const customHandle = handleInput ? handleInput.value.trim() : null;
        
        // ── CHECK ARQUETIPO REPETIDO (PERSISTENCIA LOCALSTORAGE) ──
        const playedStorageKey = "twitero_played_archetypes";
        let playedArchs = [];
        try {
          playedArchs = JSON.parse(localStorage.getItem(playedStorageKey) || "[]");
        } catch(err) {}

        const isRepeat = playedArchs.includes(this.sel.arch);
        if (!isRepeat) {
          playedArchs.push(this.sel.arch);
          try { localStorage.setItem(playedStorageKey, JSON.stringify(playedArchs)); } catch(err) {}
        }

        const proceedToGame = () => {
          this.eng.init(this.sel.genero, this.sel.arch, this.sel.pers, customHandle);
          this.showScreen("screen-game");
          this._updateStatsOnly();

          // Sincronizar Fase de metahistoria y música Lo-Fi adaptativa
          const archKey = getArchKey(this.sel.arch);
          const metaArc = typeof METAHISTORY_DATA !== 'undefined' ? METAHISTORY_DATA[archKey] : null;
          const archPhase = metaArc?.fase || 1;
          snd.setPhase(archPhase);
          snd.startMusic();

          const phaseBadge = document.getElementById("audio-phase-indicator");
          if (phaseBadge) phaseBadge.textContent = `FASE ${archPhase}`;

          this._onTutorialClose = () => {
            this._renderFullTurn();
          };
          this._startTutorial();
        };

        if (isRepeat) {
          const repOverlay = document.getElementById("repeat-archetype-modal-overlay");
          const archObj = ARCHETYPES.find(a => a.id === this.sel.arch);
          const genderedArch = getGenderedArchetype(archObj, this.sel.genero);
          const titleEl = document.getElementById("repeat-arch-title");
          const iconEl = document.getElementById("repeat-arch-icon");
          const okBtn = document.getElementById("btn-repeat-arch-ok");

          if (titleEl) titleEl.textContent = `HISTORIA DE ${genderedArch.toUpperCase()}`;
          if (iconEl) iconEl.textContent = archObj?.icono || "🎭";
          if (repOverlay) repOverlay.classList.add("active");

          const handleRepClose = () => {
            snd.click();
            if (repOverlay) repOverlay.classList.remove("active");
            proceedToGame();
          };
          if (okBtn) okBtn.onclick = handleRepClose;
        } else {
          proceedToGame();
        }
      };
    });
  }

  _updateStatsOnly() {
    const e=this.eng;
    const set=(id,v)=>{ const el=document.getElementById(id); if(el) el.textContent=v; };

    const currentAvatar = e.getAvatar();
    const genderedArch = getGenderedArchetype(e.arquetipo, e.genero);
    const archName = (typeof i18n !== "undefined" && i18n.t(`archetypes.${e.arquetipo.id}.nombre`)) || genderedArch;
    const persName = (typeof i18n !== "undefined" && i18n.t(`personalities.${e.personalidad.id}.nombre`)) || e.personalidad.nombre;
    const persDesc = (typeof i18n !== "undefined" && i18n.t(`personalities.${e.personalidad.id}.desc`)) || e.personalidad.desc;

    const iconEl=document.getElementById("char-icon"); if(iconEl) iconEl.textContent=currentAvatar;
    set("char-name", archName.toUpperCase());
    set("char-pers",`${e.handle} · ${e.personalidad.icono} ${persName.toUpperCase()}`);

    const identEl=document.getElementById("char-identity");
    if(identEl){
      const pron=GENERO_LABELS[e.genero]||"Elle";
      const arch=e.arquetipo;
      const aChips=(arch.afines||[]).map(f=>`<span class="chip-afin-sm">${CARD_PALOS[f]?.icono||""} ${f}</span>`).join("");
      const dChips=(arch.debiles||[]).map(f=>`<span class="chip-debil-sm">${CARD_PALOS[f]?.icono||""} ${f}</span>`).join("");
      const t = (k, p, d) => typeof i18n !== "undefined" ? i18n.t(k, p, d) : d;
      identEl.innerHTML=`
        <div class="id-row"><span class="id-label">${t("setup.handle_title", null, "CUENTA X")}</span><span class="id-val" style="color:var(--blue-bright)">${e.handle}</span></div>
        <div class="id-row"><span class="id-label">${t("setup.gender_title", null, "PRONOMBRES")}</span><span class="id-val">${pron}</span></div>
        <div class="id-row"><span class="id-label">${t("setup.archetype_title", null, "ARQUETIPO")}</span><span class="id-val">${archName}</span></div>
        <div class="id-row"><span class="id-label">${t("setup.personality_title", null, "PERSONALIDAD")}</span><span class="id-val">${persDesc}</span></div>
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
    const turnWord = typeof i18n !== "undefined" ? i18n.t("dashboard.turn", null, "TURNO") : "TURNO";
    set("turn-badge",`${turnWord} ${String(e.turno).padStart(2,"0")} / 20`);
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
    const gameMainEl = document.getElementById("game-main-el");
    const cardsSubtitleEl = document.getElementById("cards-subtitle");

    if (e.rachaViralActive) {
      if (gameMainEl) gameMainEl.classList.add("racha-viral-mode");
      const wins = e.rachaViralCount || 0;
      const currentStep = Math.min(3, wins + 1);
      if (cardsSubtitleEl) {
        cardsSubtitleEl.innerHTML = `<span style="color:var(--amber); font-weight:800;">⚡ MODO VIRAL ACTIVO: TWEET ${currentStep} DE 3 — ALTO RIESGO DE CANCELACIÓN</span>`;
      }
      if (rvBanner) {
        rvBanner.style.display = "flex";
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
      }
    } else {
      if (gameMainEl) gameMainEl.classList.remove("racha-viral-mode");
      if (rvBanner) rvBanner.style.display = "none";
      if (cardsSubtitleEl && cardsSubtitleEl.innerHTML.includes("MODO VIRAL ACTIVO")) {
        cardsSubtitleEl.textContent = typeof i18n !== "undefined" ? i18n.t("cards.section_sub", null, "SELECCIONÁ UNA CARTA PARA PUBLICAR ESTE TURNO") : "SELECCIONÁ UNA CARTA PARA PUBLICAR ESTE TURNO";
      }
    }


    this._renderBuildPanel();
    this._renderProgressBar();
    this._renderSparkline();
  }

  _renderBuildPanel() {
    const el=document.getElementById("build-panel"); if(!el) return;
    const e=this.eng, arch=e.arquetipo, pers=e.personalidad;
    const genderedArch = (typeof i18n !== "undefined" && i18n.t(`archetypes.${arch.id}.nombre`)) || (typeof getGenderedArchetype === "function" ? getGenderedArchetype(arch, e.genero) : arch.nombre);
    const persNombre = (typeof i18n !== "undefined" && i18n.t(`personalities.${pers.id}.nombre`)) || pers.nombre;
    const alliedLabel = typeof i18n !== "undefined" ? i18n.t("profile.allied", null, "Cartas afines") : "Cartas afines";
    const synergyLabel = typeof i18n !== "undefined" ? i18n.t("profile.synergy", null, "Sinergia") : "Sinergia";
    const afinesList = (arch.afines || []).map(f => (typeof i18n !== "undefined" ? i18n.t("cards.palo_" + f) : f) || f).join(", ");

    const lang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
    let synergyLine = e.comboRisk ? "+6% a todas las tiradas por perfil no convencional" : "Combo canónico — sin bonus adicional";
    if (lang === "en") {
      synergyLine = e.comboRisk ? "+6% to all rolls due to unconventional build" : "Canonical build — no extra bonus";
    } else if (lang === "ja") {
      synergyLine = e.comboRisk ? "変則ビルドにより全判定+6%" : "王道ビルド — 追加ボーナスなし";
    }

    el.innerHTML=`
      <div class="build-row"><span>🎭 ${genderedArch}</span><span class="build-val">${alliedLabel}: ${afinesList}</span></div>
      <div class="build-row"><span>${pers.icono} ${persNombre}</span><span class="build-val">${pers.bonus} · ${pers.malus}</span></div>
      <div class="build-row"><span>⚡ ${synergyLabel}</span><span class="build-val">${synergyLine}</span></div>
    `;
  }

  _renderProgressBar() {
    const el=document.getElementById("goal-progress"); if(!el) return;
    const pct=Math.min(100,(this.eng.seguidores/80000)*100);
    const fill=el.querySelector(".goal-fill");
    const label=el.querySelector(".goal-label");
    if(fill) fill.style.width=pct+"%";
    const pctStr = pct.toFixed(0);
    const metaTxt = typeof i18n !== "undefined"
      ? i18n.t("dashboard.meta_goal", { pct: pctStr }, `META DE VICTORIA: 80K SEGUIDORES — ${pctStr}%`)
      : `META DE VICTORIA: 80K SEGUIDORES — ${pctStr}%`;
    if(label) label.textContent = metaTxt;
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
      // Localize fortuitous event based on language
      const fortLang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
      let locFort = fort;
      if (fortLang !== "es" && typeof getLocalizedFortuitousEvent === "function") {
        locFort = getLocalizedFortuitousEvent(fort, fortLang) || fort;
      } else if (fortLang !== "es") {
        // Inline fallback translation for key algoritmo events
        const fortKey = fort.tipo || fort.key || "";
        if (fortKey === "algoritmo_positivo" || fort.multIngresos === 2.0) {
          if (fortLang === "en") {
            locFort = { ...fort, titulo: "THE ALGORITHM BLESSES YOU (x2 INCOME)", desc: "Platform engineers tweaked the 'For You' feed weights and your account is now classified as high-value content.", consecuencia: fort.consecuencia };
          } else if (fortLang === "ja") {
            locFort = { ...fort, titulo: "アルゴリズムに祝福される（収入×2）", desc: "プラットフォームのエンジニアが「おすすめ」フィードの重みを調整し、あなたのアカウントは高価値コンテンツとして分類されました。", consecuencia: fort.consecuencia };
          }
        } else if (fortKey === "algoritmo_negativo" || fort.multIngresos === 0.5) {
          if (fortLang === "en") {
            locFort = { ...fort, titulo: "ALGORITHM SHADOWBAN (x0.5 INCOME)", desc: "A silent algorithm update tanked your account's reach due to alleged spam or excessive controversy.", consecuencia: fort.consecuencia };
          } else if (fortLang === "ja") {
            locFort = { ...fort, titulo: "アルゴリズムのシャドウバン（収入×0.5）", desc: "アルゴリズムのサイレントアップデートにより、スパムや過度な炎上を理由としてリーチが大幅に低下しました。", consecuencia: fort.consecuencia };
          }
        }
      }
      this._showAlert(
        `${locFort.icono} ${locFort.titulo}`,
        `${locFort.desc}<br><br><strong style='color:var(--green); font-family:var(--font-mono);'>${locFort.consecuencia}</strong>`,
        ""
      );
      this._updateStatsOnly();
    }

    // ── CHECK NUEVOS BOOSTERS DISPONIBLES ──
    if (!this.unlockedBoostersShown) this.unlockedBoostersShown = new Set();
    const newlyAffordable = BOOSTERS.filter(b => this.eng.dinero >= b.costo && !this.unlockedBoostersShown.has(b.id));
    if (newlyAffordable.length > 0) {
      newlyAffordable.forEach(b => this.unlockedBoostersShown.add(b.id));
      const bShowcases = newlyAffordable.map(b => {
        const bName = (typeof i18n !== "undefined" && i18n.t(`boosters.${b.id}.nombre`)) || b.nombre;
        return `
        <div class="booster-unlock-showcase">
          <div class="booster-badge-icon">${b.icono}</div>
          <div class="booster-showcase-title">${bName}</div>
          <div class="booster-price-pill">$${b.costo.toLocaleString()}</div>
        </div>
      `;
      }).join("");

      const title = (typeof i18n !== "undefined" && i18n.t("shop.new_booster")) || "🚀 NUEVO BOOSTER DISPONIBLE";
      const meta = (typeof i18n !== "undefined" && i18n.t("shop.title")) || "TIENDA DE BOOSTERS";

      this._showAlert(
        title,
        `${bShowcases}`,
        meta,
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
      const lang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
      const locEv = typeof getLocalizedEvent === "function" ? getLocalizedEvent(ev, lang, this.eng.arquetipo?.id) : ev;
      document.getElementById("cards-section").style.display = "none";
      document.getElementById("event-section").style.display = "none";
      document.getElementById("interactive-event-box").style.display = "none";

      this._showAlert(
        `⚡ ${locEv.titulo.toUpperCase()}`,
        `${locEv.desc}`,
        locEv.tag,
        false,
        () => {
          this._renderInteractiveEvent(locEv);
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
        const lang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
        let zrTitle = "🚨 ZONA ROJA — ¡ÚLTIMO TURNO DE GRACIA! (2/3)";
        let t1 = "🔥 TURNO 1: ACTIVO";
        let t2 = "🚨 TURNO 2: EN CURSO";
        let t3 = "☠️ TURNO 3: EXPULSIÓN";
        let critTitle = "💀 PELIGRO INMINENTE DE SUSPENSIÓN";
        let critDesc = "Llevás 2 turnos consecutivos con Odio ≥ 80%. <strong>Si este turno termina sin bajar el Odio por debajo de 80%, perderás la partida automáticamente por Hostilidad Extrema.</strong>";
        let survTitle = "🛡️ ACCIÓN URGENTE REQUERIDA:";
        let survDesc = "Reducí el Odio AHORA MISMO en este turno o la plataforma cerrará tu perfil.";
        let tag = "EXPULSIÓN INMINENTE";

        if (lang === "en") {
          zrTitle = "🚨 RED ZONE — FINAL GRACE TURN! (2/3)";
          t1 = "🔥 TURN 1: ACTIVE";
          t2 = "🚨 TURN 2: IN PROGRESS";
          t3 = "☠️ TURN 3: SUSPENSION";
          critTitle = "💀 IMMINENT BAN RISK";
          critDesc = "You've spent 2 consecutive turns with Hate ≥ 80%. <strong>If this turn ends without lowering Hate below 80%, you will lose immediately due to Extreme Toxicity.</strong>";
          survTitle = "🛡️ URGENT ACTION REQUIRED:";
          survDesc = "Lower your Hate RIGHT NOW this turn or the platform will ban your account.";
          tag = "IMMINENT BAN";
        } else if (lang === "ja") {
          zrTitle = "🚨 警戒ゾーン — 最後の猶予ターン！(2/3)";
          t1 = "🔥 ターン1: 発動";
          t2 = "🚨 ターン2: 進行中";
          t3 = "☠️ ターン3: アカウント凍結";
          critTitle = "💀 永久凍結の危機";
          critDesc = "ヘイト値80%以上が2ターン連続しています。<strong>このターン終了までに80%未満に下げられなければ、炎上により即座にゲームオーバーとなります。</strong>";
          survTitle = "🛡️ 今すぐ対処が必要:";
          survDesc = "今ターン中に必ずヘイト値を下げてください。さもなければアカウントが停止されます。";
          tag = "凍結寸前";
        }

        this._showAlert(
          zrTitle,
          `<div class="strike-meter-row">
             <div class="strike-slot active-2">${t1}</div>
             <div class="strike-slot active-2">${t2}</div>
             <div class="strike-slot danger-target">${t3}</div>
           </div>
           <div class="strike-info-card critical">
             <strong>${critTitle}</strong><br>
             ${critDesc}
           </div>
           <div class="strike-info-card survival">
             <strong>${survTitle}</strong><br>
             ${survDesc}
           </div>`,
          tag,
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
    const boosterMultiplier = booster?.fx?.mult ? `${booster.fx.mult}x` : "1.0x";

    container.innerHTML=cards.map((c,idx)=>{
      const palo = c.paloOverride || c.palo || CARD_PALOS[c.id] || { nombre:"TWEET", icono:"💬", color:"#1d9bf0" };
      const paloKey = c.paloOverride?.id || (typeof c.palo === "string" ? c.palo : (c.palo?.id || c.id));
      const paloNombre = (typeof i18n !== "undefined" && i18n.t("cards.palo_" + paloKey, null, palo.nombre)) || palo.nombre;
      const chance = this.eng._successChance(c, booster);
      const chanceColor = chance >= 70 ? "var(--green)" : chance >= 50 ? "var(--amber)" : "var(--red)";
      
      const paloConcept = (typeof i18n !== "undefined" && i18n.t("cards.concept_" + paloKey, null, CARD_CONCEPT_DESCS[paloKey])) || null;
      let conceptDesc = paloConcept || CARD_CONCEPT_DESCS[paloKey] || CARD_CONCEPT_DESCS[c.id] || "Publicación estratégica en el feed.";
      const lang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
      if (c.isHistoria) {
        const archKey = getArchKey(e.arquetipo?.id);
        const headline = typeof getLocalizedStoryHeadline === "function" ? getLocalizedStoryHeadline(e.arquetipo?.id, lang) : null;
        conceptDesc = c.desc || headline || "Revelación clave de la trama en el timeline.";
      }

      // Badge visual de carta nueva
      const isNew = !e.seenCardTypes.has(c.id);
      const badgeHtml = isNew ? `<div class="card-new-badge">✨ NUEVA</div>` : '';

      const wrapClass = this.cardsAlreadyFlipped ? "card-flip-wrap flipped" : "card-flip-wrap";

      const isDisabled = !!c.disabled;
      const cardClass = isDisabled ? "truco-card story-disabled-card" : "truco-card";
      const cursorStyle = isDisabled ? "cursor:not-allowed;" : "cursor:pointer;";

      const tTweetNow = (typeof i18n !== "undefined") ? i18n.t("cards.tweet_now", null, "TUITEAR AHORA ▶") : "TUITEAR AHORA ▶";
      const tBlocked = (typeof i18n !== "undefined") ? i18n.t("cards.blocked", null, "BLOQUEADA ✕") : "BLOQUEADA ✕";
      const tSuccess = (typeof i18n !== "undefined") ? i18n.t("cards.success_prob", null, "PROB. ÉXITO:") : "PROB. ÉXITO:";
      const tMult = (typeof i18n !== "undefined") ? i18n.t("cards.multiplier", null, "MULT:") : "MULT:";
      const tNewBadge = (typeof i18n !== "undefined") ? i18n.t("cards.new_badge", null, "✨ NUEVA") : "✨ NUEVA";
      const tStoryLocked = (typeof i18n !== "undefined") ? i18n.t("cards.story_locked", null, "🔒 BLOQUEADA POR HISTORIA") : "🔒 BLOQUEADA POR HISTORIA";

      const cardTitle = typeof getLocalizedCardTitle === "function" ? getLocalizedCardTitle(c, lang, e.arquetipo?.id) : c.titulo;

      return `
      <div class="${wrapClass}" id="card-wrap-${idx}">
        <div class="card-flip-inner">
          <div class="card-face card-back">
            <div class="card-back-minimal">
              <img src="favicon.jpg" class="card-back-logo" alt="Tuitero" />
              <div class="card-back-label">TUITERO</div>
            </div>
          </div>
          <div class="card-face card-front">
            <div class="${cardClass}" style="border-top-color:${palo.color}; ${cursorStyle}" data-idx="${idx}" data-story-locked-label="${tStoryLocked}">
              <div class="card-suit-tag" style="color:${palo.color};">
                <span class="card-suit-dot" style="background:${palo.color};"></span>
                ${paloNombre.toUpperCase()}
                ${isNew && !isDisabled ? `<span class="card-new-badge">${tNewBadge}</span>` : `<span class="card-key-badge">[${idx + 1}]</span>`}
              </div>
              <div class="card-palo">${palo.icono}</div>
              <div class="card-title">${cardTitle}</div>
              <div class="card-desc">${conceptDesc}</div>
              
              <div class="card-stats">
                <div class="card-chips-row">
                  <span class="cstat neu">${tSuccess} <strong style="color:${chanceColor};">${chance}%</strong></span>
                  <span class="cstat neu">${tMult} <strong>${boosterMultiplier}</strong></span>
                </div>
              </div>

              <button class="card-play-btn" data-idx="${idx}" ${isDisabled ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : ''}>
                ${isDisabled ? tBlocked : tTweetNow}
              </button>
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
        if(cards[idx]?.disabled) return;
        this._playCardIdx(idx);
      };
    });

    container.querySelectorAll(".card-play-btn").forEach(btn=>{
      btn.onclick=(e)=>{
        e.stopPropagation();
        if(this.isResolvingAction) return;
        const idx=parseInt(btn.dataset.idx);
        if(cards[idx]?.disabled) return;
        this._playCardIdx(idx);
      };
    });
  }

  _setupMobileBoostersModal() {
    const overlay = document.getElementById("mobile-boosters-overlay");
    const toggleBtn = document.getElementById("btn-toggle-boosters-mobile");
    const closeBtn = document.getElementById("btn-close-mobile-boosters");
    const readyBtn = document.getElementById("btn-mobile-boosters-ready");

    if (!overlay) return;

    const openModal = () => {
      snd.click();
      overlay.classList.add("active");
      this._renderBoosters();
    };

    const closeModal = () => {
      snd.click();
      overlay.classList.remove("active");
    };

    if (toggleBtn) toggleBtn.onclick = openModal;
    if (closeBtn) closeBtn.onclick = closeModal;
    if (readyBtn) readyBtn.onclick = closeModal;

    overlay.onclick = (e) => {
      if (e.target === overlay) closeModal();
    };
  }

  _renderBoosters() {
    const grid = document.getElementById("boosters-grid");
    const mobileGrid = document.getElementById("mobile-boosters-grid");
    const available = this.eng.getAvailableBoosters();
    const t = (k, p, d) => typeof i18n !== "undefined" ? i18n.t(k, p, d) : d;

    // Actualizar botón en la topbar
    const tbBadge = document.getElementById("tb-booster-badge");
    const tbLabel = document.getElementById("tb-booster-label");
    const tbBtn = document.getElementById("btn-toggle-boosters-mobile");

    if (tbBadge) tbBadge.textContent = available.length;
    if (this.preparedBoosterId) {
      const activeB = BOOSTERS.find(b => b.id === this.preparedBoosterId);
      const activeName = activeB ? t(`boosters.${activeB.id}.nombre`, null, activeB.nombre) : "";
      if (tbLabel) tbLabel.textContent = activeB ? `${activeB.icono} ${t("shop.active_single", null, "ACTIVO")}` : "BOOSTER";
      if (tbBtn) tbBtn.classList.add("booster-active-pulse");
    } else {
      if (tbLabel) tbLabel.textContent = "BOOSTERS";
      if (tbBtn) tbBtn.classList.remove("booster-active-pulse");
    }

    // Actualizar status bar del modal móvil
    const mStatus = document.getElementById("mobile-boosters-status");
    if (mStatus) {
      if (this.preparedBoosterId) {
        const activeB = BOOSTERS.find(b => b.id === this.preparedBoosterId);
        const activeName = activeB ? t(`boosters.${activeB.id}.nombre`, null, activeB.nombre) : "";
        mStatus.innerHTML = activeB
          ? `<span style="color:var(--amber); font-weight:800;">⚡ ${activeB.icono} ${activeName} ${t("shop.active_single", null, "ACTIVO")}</span> — ${t("shop.booster_active", { icon: activeB.icono, name: activeName, mult: activeB.fx.mult }, `Próximo tweet multiplicado ${activeB.fx.mult}x`)}`
          : "Booster activado";
      } else {
        mStatus.textContent = t("shop.no_booster_selected", null, "Ningún booster seleccionado (modo normal)");
      }
    }

    if (available.length === 0) {
      const emptyHtml = `<div style="grid-column:span 3;padding:10px;font-family:var(--font-mono);font-size:0.7rem;color:var(--gray-1);text-align:center;">${t("shop.no_boosters", null, "SIN BOOSTERS DISPONIBLES CON EL SALDO ACTUAL")}</div>`;
      if (grid) grid.innerHTML = emptyHtml;
      if (mobileGrid) mobileGrid.innerHTML = emptyHtml;
      return;
    }

    const BOOSTER_KEYS = ['Q', 'W', 'E'];
    const renderHtml = available.map((b, i) => {
      const isHl = this.preparedBoosterId === b.id;
      const keyHint = BOOSTER_KEYS[i] ? `<span class="booster-key-pill">${BOOSTER_KEYS[i]}</span>` : '';
      const bNombre = t(`boosters.${b.id}.nombre`, null, b.nombre);
      const bDesc = t(`boosters.${b.id}.desc`, null, b.desc);
      const sSuffix = b.cooldown > 1 ? 's' : '';
      const cdLabel = t("shop.cooldown_label", { turns: b.cooldown, s: sSuffix }, `Cooldown: ${b.cooldown} turno${sSuffix}`);
      const tip = `<strong>${b.icono} ${bNombre}</strong><br>${bDesc}<br><span style='color:#eab308;'>${cdLabel}</span>`.replace(/"/g, '&quot;');
      return `<div class="booster-tile ${isHl ? "highlighted" : ""}" data-id="${b.id}" data-tooltip="${tip}">
        ${keyHint}
        <div class="b-icon">${b.icono}</div>
        <div class="b-name">${bNombre}</div>
        <div class="b-cost">$${b.costo.toLocaleString()}</div>
      </div>`;
    }).join("");

    if (grid) grid.innerHTML = renderHtml;
    if (mobileGrid) mobileGrid.innerHTML = renderHtml;

    const handleTileClick = (tile) => {
      if (this.isResolvingAction) return;
      const bId = tile.dataset.id;
      if (this.preparedBoosterId === bId) {
        this.preparedBoosterId = null;
        snd.click();
      } else {
        this.preparedBoosterId = bId;
        snd.boost();
      }
      this._renderCards();
      this._renderBoosters();
    };

    if (grid) {
      grid.querySelectorAll(".booster-tile").forEach(tile => {
        tile.onclick = () => handleTileClick(tile);
      });
    }
    if (mobileGrid) {
      mobileGrid.querySelectorAll(".booster-tile").forEach(tile => {
        tile.onclick = () => handleTileClick(tile);
      });
    }
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
      const lang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
      const optLabel = lang === "ja" ? "選択肢 " : lang === "en" ? "OPTION " : "OPCIÓN ";
      const chooseBtnLabel = lang === "ja" ? "この方針を選択 ▶" : lang === "en" ? "CHOOSE STANCE ▶" : "ELEGIR POSTURA ▶";

      container.innerHTML = indexedOpts.map((item, displayIdx)=>{
        const optIcon = optIcons[displayIdx] || '⚡';
        return `
        <div class="truco-card event-truco-card" style="border-top-color:var(--purple); flex:1; min-width:220px; cursor:pointer;" data-idx="${item.origIdx}">
          <div class="card-suit-tag" style="color:var(--purple);">
            <span class="card-suit-dot" style="background:var(--purple);"></span>
            ${optLabel}${displayIdx+1}
          </div>
          <div class="card-palo">${optIcon}</div>
          <div class="card-title">${item.opt.texto}</div>
          <button class="card-play-btn btn-opt-choose" data-idx="${item.origIdx}" style="background:var(--purple); margin-top:auto;">${chooseBtnLabel}</button>
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

    const lang2 = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
    const locEv = (lang2 !== "es" && typeof getLocalizedEvent === "function")
      ? getLocalizedEvent(ev, lang2, this.eng.arquetipo?.id)
      : ev;
    const locOpt = (locEv && locEv.opciones && locEv.opciones[idx]) ? locEv.opciones[idx] : opt;

    this.eng.turnLog.push({
      t: this.eng.turno,
      type: "event",
      eventTitle: locEv.titulo || ev.titulo,
      choice: locOpt.texto || opt.texto,
      effects: opt.efectoDesc
    });

    snd.click();

    const simulatedCard = {
      id: "evento",
      titulo: locEv.titulo || ev.titulo,
      texto: locOpt.tweet || locOpt.texto || opt.tweet || opt.texto
    };

    const defaultNarrative = lang2 === "ja" ? "戦略的な決断を実行した。" : lang2 === "en" ? "Strategic decision executed." : "Decisión estratégica ejecutada.";

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
      customNarrative: locOpt.resultado || opt.resultado || defaultNarrative
    };

    const impactTitle = lang2 === "ja" ? "⚡ タイムラインへのインパクト" : lang2 === "en" ? "⚡ IMPACT OF YOUR CHOICE ON THE TIMELINE" : "⚡ IMPACTO DE TU ELECCIÓN EN EL TIMELINE";

    this._showNarrativePanel(simulatedCard, outcomeRes, impactTitle, locOpt.resultado || opt.resultado);
  }

  _getTweetDate(fase = 1, turno = 1, cardFecha = null) {
    if (cardFecha) {
      return cardFecha.replace(/([A-Z][a-z]{2})/g, (m) => m.toLowerCase() + (m.endsWith('.') ? '' : '.'));
    }
    const meses = ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sep.", "oct.", "nov.", "dic."];
    let d, m, y;
    if (turno >= 20 && fase < 4) {
      return `14 mar. 2026`;
    }
    if (fase === 1) {
      y = 2024; m = 1;
      d = Math.min(29, 9 + turno);
    } else if (fase === 2) {
      y = 2024;
      const dayOffset = (turno - 1) * 2;
      if (15 + dayOffset <= 30) {
        m = 3;
        d = 15 + dayOffset;
      } else {
        m = 4;
        d = Math.min(31, 15 + dayOffset - 30);
      }
    } else if (fase === 3) {
      y = 2024;
      const dayOffset = (turno - 1) * 2;
      if (15 + dayOffset <= 31) {
        m = 6;
        d = 15 + dayOffset;
      } else {
        m = 7;
        d = Math.min(31, 15 + dayOffset - 31);
      }
    } else {
      y = 2026;
      const dayOffset = (turno - 1) * 4;
      if (10 + dayOffset <= 31) {
        m = 0;
        d = 10 + dayOffset;
      } else if (10 + dayOffset <= 59) {
        m = 1;
        d = 10 + dayOffset - 31;
      } else {
        m = 2;
        d = Math.min(31, 10 + dayOffset - 59);
      }
    }
    const lang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
    if (lang === "ja") return `${y}年${m + 1}月${d}日`;
    if (lang === "en") {
      const enMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return `${enMonths[m]} ${d}, ${y}`;
    }
    return `${d} ${meses[m]} ${y}`;
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
    const panelLang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
    const rawTweet = (card.texto || card.titulo || "Contenido en el feed.");
    // For non-ES, try to get localized tweet from card translations; fall back to original
    const localizedTweet = (panelLang !== "es" && typeof getLocalizedCardTweet === "function" && card.id !== "evento")
      ? (getLocalizedCardTweet(card, panelLang, e.arquetipo?.id) || rawTweet)
      : rawTweet;
    const tweetContent = typeof adaptTweetGender === "function" ? adaptTweetGender(localizedTweet, e.genero) : localizedTweet;
    const viralData = res.viral;

    const tNarr = (k, p, d) => typeof i18n !== "undefined" ? i18n.t(k, p, d) : d;

    let logLines = [];
    if(card.id === "evento") {
      logLines.push(tNarr("narrative.stance_registered", null, "⚡ POSTURA ESTRATÉGICA REGISTRADA"));
    } else {
      logLines.push(tNarr("narrative.roll_result", { roll: res.roll, chance: res.chance }, `🎲 RESULTADO DE LA TIRADA: <strong>D${res.roll}</strong> (Requerido: ≤ ${res.chance}%)`));
      if(booster) {
        const boosterName = (typeof i18n !== "undefined" && i18n.t(`boosters.${booster.id}.nombre`)) || booster.nombre;
        logLines.push(tNarr("narrative.booster_applied", { name: boosterName, mult: booster.fx?.mult || 1.35 }, `📢 BOOSTER APLICADO: <strong>${boosterName}</strong> (${booster.fx?.mult || 1.35}x impacto)`));
      }
      if(res.ok) {
        logLines.push(tNarr("narrative.followers_gain", { amount: res.segsGain.toLocaleString() }, `👥 SEGUIDORES: <strong style="color:var(--green)">+${res.segsGain.toLocaleString()}</strong>`));
        logLines.push(tNarr("narrative.engagement_gain", { amount: res.engGain }, `⚡ ENGAGEMENT: <strong style="color:var(--green)">+${res.engGain}</strong>`));
        if(res.dinGain > 0) logLines.push(tNarr("narrative.cash_earned", { amount: res.dinGain.toLocaleString() }, `💰 DINERO COBRADO: <strong style="color:var(--amber)">+$${res.dinGain.toLocaleString()}</strong>`));
      } else {
        logLines.push(tNarr("narrative.followers_lost", { amount: res.segsGain.toLocaleString() }, `👥 PÉRDIDA DE SEGUIDORES: <strong style="color:var(--red)">${res.segsGain.toLocaleString()}</strong>`));
        logLines.push(tNarr("narrative.hate_generated", { amount: res.hateGain }, `❤️‍🔥 ODIO GENERADO: <strong style="color:var(--red)">+${res.hateGain}</strong>`));
      }
    }

    if(isCrisis) {
      let canc = res.cancellationEvent;
      if (panelLang !== "es" && typeof getLocalizedCancellation === "function") {
        canc = getLocalizedCancellation(canc, panelLang);
      }
      res.cancellationEvent = canc;
      const strikeText = isFatalCrisis
        ? tNarr("narrative.strike_fatal", null, "☠️ STRIKE 3/3 — CANCELACIÓN DEFINITIVA")
        : tNarr("narrative.strike_alert", { strike: canc.strike }, `⚠️ STRIKE ${canc.strike}/3 — ALERTA DE CANCELACIÓN`);
      logLines.push(`<strong style="color:var(--red)">${strikeText}: ${canc.titulo}</strong>`);
      logLines.push(`<span style="color:var(--off-white); font-size:0.75rem;">${canc.motivo || canc.texto}</span>`);
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
    const genderedArch = (typeof i18n !== "undefined" && i18n.t(`archetypes.${e.arquetipo.id}.nombre`)) || getGenderedArchetype(e.arquetipo, e.genero);
    const verifiedBadgeHtml = isVerified ? `<span class="tweet-verified-badge" title="Cuenta Verificada">☑️</span>` : '';
    const tStoryClue = (typeof i18n !== "undefined") ? i18n.t("narrative.story_clue_found", null, "🔍 PISTA NARRATIVA DESCUBIERTA") : "🔍 PISTA NARRATIVA DESCUBIERTA";
    const tViral = (typeof i18n !== "undefined") ? i18n.t("narrative.viral_tweet", null, "🎯 TWEET VIRAL — EXCELENTE ENGAGEMENT EN EL TIMELINE") : "🎯 TWEET VIRAL — EXCELENTE ENGAGEMENT EN EL TIMELINE";
    const tRatio = (typeof i18n !== "undefined") ? i18n.t("narrative.historic_ratio", null, "💥 RATIO HISTÓRICO — EL TIMELINE SE TE VINO ENCIMA") : "💥 RATIO HISTÓRICO — EL TIMELINE SE TE VINO ENCIMA";
    const outcomeTitle = card.isHistoria ? tStoryClue : (customOutcomeTitle || (isSuccess ? tViral : tRatio));

    // Pool of authentic community tweets scrolling in the timeline (localized ES, EN, JA)
    const lang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
    const communityTweetsByLang = {
      es: [
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
      ],
      en: [
        { av: "🐱", name: "Dev Cat", handle: "@cat_coder", time: "2m", text: "deployed straight to production on Friday 5 PM, send thoughts and prayers..." },
        { av: "☕", name: "Coffee Snob", handle: "@coffee_purist", time: "5m", text: "charging $9 for an oat milk latte is literally daylight robbery" },
        { av: "🚀", name: "Crypto Chad", handle: "@hodl_chad", time: "8m", text: "if you couldn't handle the 30% dip you don't deserve the 1000% rally" },
        { av: "💅", name: "Emily ✨", handle: "@emily_vlogs", time: "11m", text: "I urgently need a 6-month sabbatical from my 2-day work week" },
        { av: "⚽", name: "Matchday Banter", handle: "@football_banter", time: "14m", text: "VAR has genuinely ruined the beautiful game, absolutely shameless decision" },
        { av: "🍿", name: "Cinephile Daily", handle: "@film_junkie", time: "18m", text: "cinema is officially back. Unreal performance and 10/10 sound design" },
        { av: "🐸", name: "Meme Dispatch", handle: "@daily_meme", time: "22m", text: "me explaining my hyperfixation to someone who just asked how my day was" },
        { av: "🧠", name: "Deep Thoughts Bot", handle: "@unironic_phil", time: "27m", text: "90% of Twitter discourse is just inventing a guy to get mad at" },
        { av: "📊", name: "Trends Worldwide", handle: "@world_trends", time: "31m", text: "Trending #1 worldwide right now: absolute chaos erupting on the timeline" },
        { av: "🔥", name: "Bait Specialist", handle: "@hot_takes_only", time: "35m", text: "unpopular opinion: pineapple on pizza is objectively superior and you know it" }
      ],
      ja: [
        { av: "🐱", name: "駆け出しエンジニア", handle: "@web_dev_jp", time: "2分", text: "金曜18時に本番環境へ直デプロイ完了。神のご加護を…" },
        { av: "☕", name: "カフェ巡りOL", handle: "@tokyo_cafe", time: "5分", text: "表参道で頼んだ抹茶ラテ1200円、氷しか入ってなくて草" },
        { av: "🚀", name: "仮想通貨侍", handle: "@crypto_samurai", time: "8分", text: "押し目で拾えなかったやつがバブルで勝てると思うなよ" },
        { av: "💅", name: "限界OLちゃん", handle: "@ol_chan_diary", time: "11分", text: "有給休暇の有給休暇が必要なくらい疲れ果ててて草" },
        { av: "⚽", name: "海外サッカー実況", handle: "@football_jp", time: "14分", text: "深夜3時に起きて見た甲斐あったわ…劇的ロスタイム弾！！" },
        { av: "🍿", name: "映画オタクの備忘録", handle: "@movie_geek_jp", time: "18分", text: "伏線回収が美しすぎて鳥肌立った。今年ベスト級の名作。" },
        { av: "🐸", name: "ネットミーム研究会", handle: "@meme_lab_jp", time: "22分", text: "月曜の労働を断固拒否する猫ちゃんの画像置いておきますね" },
        { av: "🧠", name: "深夜の哲学者", handle: "@night_thinker", time: "27分", text: "タイムラインって存在しない敵を作り出して一人で怒ってる人多すぎん？" },
        { av: "📊", name: "日本のトレンド速報", handle: "@trends_japan", time: "31分", text: "日本のトレンド1位：深夜のTL大論争が勃発中" },
        { av: "🔥", name: "レスバ審判員", handle: "@resuba_judge", time: "35分", text: "今日のTwitterも平常運転で地獄みたいな学級会やってて安心した" }
      ]
    };
    const communityTweets = communityTweetsByLang[lang] || communityTweetsByLang.es;

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

    // Fecha auténtica estilo Twitter (timestamp progresivo y coherente)
    const archKeyForDate = getArchKey(e.arquetipo.id);
    const metaArcForDate = typeof METAHISTORY_DATA !== 'undefined' ? METAHISTORY_DATA[archKeyForDate] : null;
    const tweetDateFormatted = this._getTweetDate(metaArcForDate?.fase || 1, e.turno, card.fecha);

    panel.innerHTML = `
      <!-- TIMELINE FEED SCROLLER (Community stream scrolling up) -->
      <div class="timeline-feed-container" id="timeline-feed-container">
        <div class="timeline-feed-viewport" id="timeline-feed-viewport">
          <div class="timeline-feed-reel" id="timeline-feed-reel">
            ${feedCardsHtml}
          </div>
          <div class="feed-skip-hint">${typeof i18n !== "undefined" ? i18n.t("narrative.clunk_hint", null, "ESPACIO O CLIC PARA FRENAZO ▶") : "ESPACIO O CLIC PARA FRENAZO ▶"}</div>
        </div>
      </div>

      <!-- MAIN RESULT SPLIT ROW (Side by side in landscape, stacked in desktop/portrait) -->
      <div class="narrative-split-row" id="narrative-split-row">
        <!-- LEFT: PLAYER'S PUBLISHED TWEET -->
        <div class="simulated-tweet-box" id="simulated-tweet-box" style="display:none;">
          <div class="tweet-left-avatar">${currentAvatar}</div>
          <div class="tweet-right-content">
            <div class="tweet-author-line">
              <span class="tweet-author-name">${genderedArch}</span>
              ${verifiedBadgeHtml}
              <span class="tweet-handle">${e.handle}</span>
              <span class="tweet-dot">·</span>
              <span class="tweet-date-stamp" style="color:#64748b; font-size:0.75rem; font-weight:400; letter-spacing:0.2px;">${tweetDateFormatted}</span>
            </div>
            <div class="tweet-body-text" id="target-tweet-body">${tweetContent}</div>
            
            <!-- BARRA DE MÉTRICAS CON SOPORTE PARA REPLY LATIENTE DE HISTORIA -->
            <div class="tweet-metrics-bar ${!isSuccess?'is-ratio':''}" id="tweet-metrics-bar" style="display:none;">
              <div class="t-metric metric-reply metric-hidden" id="metric-reply">
                <span class="m-icon" id="reply-m-icon">💬</span>
                <span class="m-val" id="reply-m-val">${formatMetric(replies)}</span>
              </div>
              <div class="t-metric metric-rt metric-hidden" id="metric-rt"><span class="m-icon">🔁</span> <span class="m-val">${formatMetric(rts)}</span></div>
              <div class="t-metric metric-like metric-hidden" id="metric-like"><span class="m-icon">❤️</span> <span class="m-val">${formatMetric(likes)}</span></div>
              <div class="t-metric metric-view metric-hidden" id="metric-view"><span class="m-icon">👁️</span> <span class="m-val">${formatMetric(views)}</span></div>
            </div>

            <!-- HILO DE REPLIES DE HISTORIA CRUZADA -->
            <div class="tweet-story-replies" id="tweet-story-replies" style="display:none;"></div>
          </div>
        </div>

        <!-- RIGHT: OUTCOME, LOGS & STATS -->
        <div class="narrative-side-stats" id="narrative-side-stats">
          <div class="narrative-consequence-box ${isSuccess?'pos':'neg'}" id="narrative-consequence" style="display:none;">
            <div class="consequence-head">${outcomeTitle}</div>
            ${consequenceText ? `<div class="consequence-desc">${consequenceText}</div>` : ''}
          </div>

          <div class="narrative-body" id="narrative-body" style="display:none;">
            <div class="narrative-log" id="narrative-log"></div>
          </div>
        </div>
      </div>

      <div class="narrative-actions">
        <button class="btn btn-primary" id="btn-narrative-accept" style="display:none;">${(typeof i18n !== "undefined") ? i18n.t("narrative.continue_btn", null, "ACEPTAR Y CONTINUAR ▶") : "ACEPTAR Y CONTINUAR ▶"} <span class="key-hint-pill">␣ ${typeof i18n !== "undefined" && i18n.getLanguage() === "ja" ? "スペース" : (typeof i18n !== "undefined" && i18n.getLanguage() === "en" ? "SPACE" : "ESPACIO")}</span></button>
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
      if (card.isHistoria && snd.storyClueCue) {
        setTimeout(() => snd.storyClueCue(), 60);
      }

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

      // ── SEQUENTIAL DING DING DING METRICS (110ms apart — EXACTO v17) ──
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

      // ── METAHISTORIA: GESTIÓN DE REPLY LATIENTE & REPLIES CRUZADAS ──
      const archKey = getArchKey(e.arquetipo.id);
      const metaArc = typeof METAHISTORY_DATA !== 'undefined' ? METAHISTORY_DATA[archKey] : null;

      // Disparador del modo historia en Turnos 5-8 si aún no está activado
      // (rango ampliado para que eventos en T6 no bloqueen el disparo)
      const isTriggerTurn = (e.turno >= 5 && e.turno <= 8);
      const canTriggerHeartbeat = isTriggerTurn && !e.storyModeActivated && !e.storyFinished && metaArc?.activador;

      if (canTriggerHeartbeat) {
        // Habilitar reply latiente en el resultado
        setTimeout(() => {
          if (!mReply) return;
          mReply.classList.add("metric-reply-heartbeat");
          const replyIcon = document.getElementById("reply-m-icon");
          if (replyIcon) replyIcon.classList.add("reply-pulsing-icon");

          // Ritmo inicial (60 BPM)
          document.documentElement.style.setProperty("--story-pulse-dur", "1.0s");

          // Bucle de audio de latido
          let heartbeatTimer = null;
          const runPulse = () => {
            if (!panel.classList.contains("active")) {
              if (heartbeatTimer) clearInterval(heartbeatTimer);
              return;
            }
            snd.heartbeatPulse(55, 0.28, 60);
          };
          runPulse();
          heartbeatTimer = setInterval(runPulse, 1000);

          // Click en el reply latiente
          mReply.onclick = (ev) => {
            ev.stopPropagation();
            if (heartbeatTimer) clearInterval(heartbeatTimer);

            // 1. Desplegar el reply sospechoso de contexto
            const repliesBox = document.getElementById("tweet-story-replies");
            if (repliesBox && metaArc.activador.replySospechosa) {
              const repLang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
              let rep = metaArc.activador.replySospechosa;
              if (repLang !== "es" && typeof getLocalizedStoryCard === "function") {
                const locCard = getLocalizedStoryCard(metaArc.activador.id, repLang);
                if (locCard && locCard.replies && locCard.replies[0]) {
                  rep = locCard.replies[0];
                }
              }
              repliesBox.style.display = "flex";
              repliesBox.innerHTML = `
                <div class="story-reply-card">
                  <div class="story-reply-avatar">🕵️</div>
                  <div class="story-reply-content">
                    <div class="story-reply-header">
                      <span class="story-reply-author">${rep.autor}</span>
                      <span class="story-reply-handle">${rep.handle}</span>
                    </div>
                    <div class="story-reply-text">${rep.texto}</div>
                  </div>
                </div>
              `;
            }

            // 2. Dos segundos y medio después: Impacto dramático (BRAAM) y apertura de modal en 3 slides
            // Damos tiempo para que el jugador lea la reply antes del modal
            setTimeout(() => {
              this._openStoryUnlockModal();
            }, 2500);
          };
        }, 750);
      } else if (e.storyModeActivated && card.isHistoria && card.replies && card.replies.length > 0) {
        // Carta de historia Capa 2 jugada:
        // No forzamos las replies — el jugador tiene que clickear el 💬 latiente para verlas
        setTimeout(() => {
          // Latido acelerado según cantidad de tweets de historia jugados
          const storyStep = Math.min(6, e.storyCardsPlayed + 1);
          const currentBpm = 60 + storyStep * 11; // 60 -> 71 -> 82 -> 93 -> 104 -> 115 BPM
          const currentVol = 0.25 + storyStep * 0.11;
          const durSec = (60 / currentBpm).toFixed(2);
          document.documentElement.style.setProperty("--story-pulse-dur", `${durSec}s`);

          if (mReply) {
            mReply.classList.add("metric-reply-heartbeat");
            const replyIcon = document.getElementById("reply-m-icon");
            if (replyIcon) replyIcon.classList.add("reply-pulsing-icon");
          }

          let storyPulseTimer = null;
          const runStoryPulse = () => {
            if (!panel.classList.contains("active")) {
              if (storyPulseTimer) clearInterval(storyPulseTimer);
              return;
            }
            snd.heartbeatPulse(55, currentVol, currentBpm);
          };
          runStoryPulse();
          storyPulseTimer = setInterval(runStoryPulse, (60 / currentBpm) * 1000);

          // Click en el reply latiente de Capa 2: revelar las replies cruzadas
          if (mReply) {
            mReply.onclick = (ev) => {
              ev.stopPropagation();
              if (storyPulseTimer) clearInterval(storyPulseTimer);
              const repliesBox = document.getElementById("tweet-story-replies");
              if (repliesBox) {
                const repLang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
                let activeReplies = card.replies;
                if (repLang !== "es" && typeof getLocalizedStoryCard === "function") {
                  const locCard = getLocalizedStoryCard(card, repLang) || getLocalizedStoryCard(card.storyId || card.contradiccion_id || card.id, repLang);
                  if (locCard && locCard.replies && locCard.replies.length > 0) {
                    activeReplies = locCard.replies;
                  }
                }
                repliesBox.style.display = "flex";
                repliesBox.innerHTML = activeReplies.map(r => `
                  <div class="story-reply-card">
                    <div class="story-reply-avatar">💬</div>
                    <div class="story-reply-content">
                      <div class="story-reply-header">
                        <span class="story-reply-author">${r.autor}</span>
                        <span class="story-reply-handle">${r.handle}</span>
                      </div>
                      <div class="story-reply-text">${r.texto}</div>
                    </div>
                  </div>
                `).join("");
              }
            };
          }
        }, 750);
      }

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

          // ── CHECK RACHA VIRAL RESOLUTION (TOTALMENTE INTERNACIONALIZADO) ──
          if (res.rachaViralUpdate && res.rachaViralUpdate.complete) {
            const rvu = res.rachaViralUpdate;
            const t = (k, p, d) => (typeof i18n !== "undefined" ? i18n.t(k, p, d) : d);
            if (rvu.success) {
              snd.legendary();
              const vTitle = t("viral_win.title", null, "🔥 ¡RACHA VIRAL COMPLETADA!");
              const vSub = t("viral_win.subtitle", null, "MOMENTO VIRAL ÉPICO");
              const vHead = t("viral_win.head", null, "🌟 ¡3 DE 3 TWEETS EXITOSOS!");
              const vBody = t("viral_win.body", null, "Dominaste el algoritmo con maestría absoluta. La comunidad te convirtió en el fenómeno indiscutido de toda la red.");
              const vGainLbl = t("viral_win.gained_label", null, "SEGUIDORES EXTRA GANADOS:");
              const vFooter = t("viral_win.footer", null, "Tu cuenta alcanza un nuevo techo histórico de visibilidad e influencia.");

              this._showAlert(
                vTitle,
                `<div class="strike-info-card survival" style="border-color:var(--green);">
                   <strong>${vHead}</strong><br>
                   ${vBody}<br><br>
                   • <strong>${vGainLbl}</strong> +${rvu.gained.toLocaleString()} (+${rvu.pct}%)<br>
                   • ${vFooter}
                 </div>`,
                vSub,
                true,
                afterTurnCallback,
                "👑"
              );
              return;
            } else {
              snd.fail();
              const lTitle = t("viral_loss.title", null, "💔 RACHA VIRAL QUEBRADA");
              const lSub = t("viral_loss.subtitle", null, "DESAFÍO VIRAL FALLIDO");
              const lMoneyLbl = t("viral_loss.money_lost", null, "DINERO PERDIDO:");
              const lPenLbl = t("viral_loss.penalty", null, "PENALIZACIÓN: +2 STRIKES");
              const lStatLbl = t("viral_loss.status", null, "ESTADO DE CUENTA:");
              const lWarn = rvu.gameOver ? t("viral_loss.suspended", null, "(SUSPENDIDA)") : t("viral_loss.danger", null, "(A 1 DEL GAME OVER)");

              this._showAlert(
                lTitle,
                `<div class="strike-info-card critical" style="display:flex; flex-direction:column; gap:8px; text-align:left; padding:10px 14px;">
                   <div style="font-size:0.86rem;">💸 <strong>${lMoneyLbl}</strong> <span style="color:var(--red); font-weight:800;">-$${rvu.moneyLost.toLocaleString()}</span></div>
                   <div style="font-size:0.86rem;">⚠️ <strong>${lPenLbl}</strong></div>
                   <div style="font-size:0.86rem;">🚨 <strong>${lStatLbl}</strong> <span style="font-weight:800; color:var(--white);">${rvu.strikes}/3 STRIKES</span> <span style="color:var(--red); font-size:0.78rem;">${lWarn}</span></div>
                 </div>`,
                lSub,
                true,
                () => {
                  if (rvu.gameOver) {
                    snd.fail();
                    this._showCancGameOverModal({
                      titulo: lTitle + " — " + (rvu.gameOver ? "GAME OVER" : ""),
                      motivo: `-$${rvu.moneyLost.toLocaleString()} · ${rvu.strikes}/3 Strikes.`,
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

  _buildShareScorecard(e, f) {
    const genderedArch = getGenderedArchetype(e.arquetipo, e.genero);
    const archName = (typeof i18n !== "undefined" && i18n.t(`archetypes.${e.arquetipo.id}.nombre`)) || genderedArch;
    const persName = (typeof i18n !== "undefined" && i18n.t(`personalities.${e.personalidad.id}.nombre`)) || e.personalidad.nombre;
    const lang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";

    const segsStr = e.seguidores.toLocaleString();
    const dinStr = "$" + e.dinero.toLocaleString();
    const smStr = e.saludMental + "%";
    const hateStr = e.odio + "%";
    const strikesStr = e.strikesCancelacion + (e.strikesCancelacion === 1 ? " Strike" : " Strikes");

    if (lang === "ja") {
      const strikeLabel = e.strikesCancelacion + "回警告";
      return `🎮 Tuitero — SNSサバイバル
👤 ${e.handle} | ${archName}（${persName}）
🏆 結末：${f.titulo}

👥 フォロワー ${segsStr}人 | 💰 ${dinStr}
🧠 メンタル ${smStr} | 🔥 炎上度 ${hateStr} | 💥 ${strikeLabel}

20ターン生き残れるか挑戦してみて！
cc @kohantoys #Tuitero
👉 bit.ly/playTuitero`;
    } else if (lang === "en") {
      return `🎮 Tuitero — Social Media Simulator
👤 ${e.handle} | ${archName} (${persName})
🏆 Ending: ${f.titulo}

👥 ${segsStr} followers | 💰 ${dinStr}
🧠 ${smStr} Health | 🔥 ${hateStr} Hate | 💥 ${strikesStr}

Can you survive cancel culture in 20 turns?
cc @kohantoys #Tuitero
👉 bit.ly/playTuitero`;
    } else {
      return `🎮 Tuitero — Simulador de Redes
👤 ${e.handle} | ${genderedArch} (${persName})
🏆 Final: ${f.titulo}

👥 ${segsStr} segs | 💰 ${dinStr}
🧠 ${smStr} Salud | 🔥 ${hateStr} Odio | 💥 ${strikesStr}

¿Sobrevivís al algoritmo en 20 turnos?
cc @kohantoys #Tuitero
👉 bit.ly/playTuitero`;
    }
  }

  _showEnd1() {
    this.showScreen("screen-end1");
    snd.stopMusic();
    snd.fanfare();
    const f=this.eng.final, e=this.eng;
    const genderedArch = getGenderedArchetype(e.arquetipo, e.genero);
    const end1Lang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
    let endTitle, endSub;
    // Special case: metahistoria endings (id starts with "metahistoria_")
    if (f.id && f.id.startsWith("metahistoria_")) {
      if (end1Lang === "en") {
        endTitle = `${genderedArch.toUpperCase()} STORY UNLOCKED`;
        endSub = "Metastory completed successfully.";
      } else if (end1Lang === "ja") {
        endTitle = `${genderedArch}のストーリー解放`;
        endSub = "メインストーリー完全踏破。";
      } else {
        endTitle = f.titulo;
        endSub = f.sub || "";
      }
    } else {
      endTitle = (typeof i18n !== "undefined" && i18n.t(`endings.${f.id}.titulo`, null, f.titulo)) || f.titulo;
      endSub = (typeof i18n !== "undefined" && i18n.t(`endings.${f.id}.sub`, null, f.sub)) || f.sub || "";
    }
    const set=(id,v)=>{ const el=document.getElementById(id); if(el) el.textContent=v; };
    set("end1-icon",f.icon||"🏆"); set("end1-title",endTitle); set("end1-sub",endSub);

    const t = (k, p, d) => typeof i18n !== "undefined" ? i18n.t(k, p, d) : d;

    // ── DESGLOSE DE 3 METAS: SEGUIDORES, DINERO E HISTORIA ──
    const targetSegs = 80000;
    const currentSegs = Math.max(0, e.seguidores || 0);
    const segsMet = currentSegs >= targetSegs;
    const segsPct = Math.min(100, Math.round((currentSegs / targetSegs) * 100));

    const targetCash = 10000;
    const currentCash = Math.max(0, e.dinero || 0);
    const cashMet = currentCash >= targetCash;
    const cashPct = Math.min(100, Math.round((currentCash / targetCash) * 100));

    const isGameOver = !!e.gameOver && (f.id === "finale_deuda" || f.id === "finale_burnout" || f.id === "finale_cancelacion_3strikes" || f.id === "finale_cancelacion_zonaroja");
    const storyMet = !isGameOver && !!(e.storyFinished || (f.id && f.id.startsWith("metahistoria_")));
    const storyPct = storyMet ? 100 : (e.storyModeActivated ? Math.min(100, Math.round(((e.storyCardsPlayed || 0) / 4) * 100)) : 0);
    const isTotalVictory = !isGameOver && (segsMet || cashMet);
    const isSurvivor = !isGameOver && !isTotalVictory;

    // Badge superior
    const statusBadgeEl = document.getElementById("end1-status-badge");
    if (statusBadgeEl) {
      if (isGameOver) {
        statusBadgeEl.className = "end-game-badge badge-defeat";
        statusBadgeEl.textContent = t("end_goals.defeat_badge", null, "💀 DERROTA // GAME OVER");
      } else if (isTotalVictory) {
        statusBadgeEl.className = "end-game-badge badge-victory";
        statusBadgeEl.textContent = t("end_goals.victory_badge", null, "🏆 VICTORIA TOTAL // META CUMPLIDA");
      } else {
        statusBadgeEl.className = "end-game-badge badge-survivor";
        statusBadgeEl.textContent = t("end_goals.survivor_badge", null, "⚠️ SUPERVIVIENTE // META INCOMPLETA");
      }
    }

    // Fila 1: Seguidores
    const segsTitleEl = document.getElementById("end1-goal-segs-title");
    const segsBadgeEl = document.getElementById("end1-goal-segs-badge");
    const segsFillEl = document.getElementById("end1-goal-segs-fill");
    const segsSubEl = document.getElementById("end1-goal-segs-sub");
    if (segsTitleEl) segsTitleEl.textContent = t("end_goals.followers_title", null, "👥 META DE SEGUIDORES (80.000)");
    if (segsBadgeEl) {
      segsBadgeEl.className = segsMet ? "goal-badge badge-success" : "goal-badge badge-fail";
      segsBadgeEl.textContent = segsMet ? t("end_goals.status_met", null, "✅ CUMPLIDA") : t("end_goals.status_insufficient", null, "❌ INSUFICIENTE");
    }
    if (segsFillEl) {
      segsFillEl.style.width = `${segsPct}%`;
      segsFillEl.className = segsMet ? "goal-fill goal-fill-success" : "goal-fill goal-fill-warning";
    }
    if (segsSubEl) {
      const segsDiff = Math.max(0, targetSegs - currentSegs);
      segsSubEl.textContent = segsMet
        ? `${currentSegs.toLocaleString()} / ${targetSegs.toLocaleString()} (100%) · ` + t("end_goals.followers_met", null, "Superaste el umbral masivo de influencia.")
        : `${currentSegs.toLocaleString()} / ${targetSegs.toLocaleString()} (${segsPct}%) · ` + t("end_goals.followers_missing", { missing: segsDiff.toLocaleString() }, `Te faltaron ${segsDiff.toLocaleString()} seguidores.`);
    }

    // Fila 2: Dinero
    const cashTitleEl = document.getElementById("end1-goal-cash-title");
    const cashBadgeEl = document.getElementById("end1-goal-cash-badge");
    const cashFillEl = document.getElementById("end1-goal-cash-fill");
    const cashSubEl = document.getElementById("end1-goal-cash-sub");
    if (cashTitleEl) cashTitleEl.textContent = t("end_goals.cash_title", null, "💰 META DE DINERO ($10.000)");
    if (cashBadgeEl) {
      cashBadgeEl.className = cashMet ? "goal-badge badge-success" : "goal-badge badge-fail";
      cashBadgeEl.textContent = cashMet ? t("end_goals.status_met", null, "✅ CUMPLIDA") : t("end_goals.status_insufficient", null, "❌ INSUFICIENTE");
    }
    if (cashFillEl) {
      cashFillEl.style.width = `${cashPct}%`;
      cashFillEl.className = cashMet ? "goal-fill goal-fill-success" : "goal-fill goal-fill-warning";
    }
    if (cashSubEl) {
      const cashDiff = Math.max(0, targetCash - currentCash);
      cashSubEl.textContent = cashMet
        ? `$${currentCash.toLocaleString()} / $${targetCash.toLocaleString()} (100%) · ` + t("end_goals.cash_met", null, "Aseguraste tu independencia financiera.")
        : `$${currentCash.toLocaleString()} / $${targetCash.toLocaleString()} (${cashPct}%) · ` + t("end_goals.cash_missing", { missing: cashDiff.toLocaleString() }, `Te faltaron $${cashDiff.toLocaleString()}.`);
    }

    // Fila 3: Historia
    const storyTitleEl = document.getElementById("end1-goal-story-title");
    const storyBadgeEl = document.getElementById("end1-goal-story-badge");
    const storyFillEl = document.getElementById("end1-goal-story-fill");
    const storySubEl = document.getElementById("end1-goal-story-sub");
    if (storyTitleEl) storyTitleEl.textContent = t("end_goals.story_title", null, "🗝️ META DE HISTORIA (CAUSA JUDICIAL)");
    if (storyBadgeEl) {
      storyBadgeEl.className = storyMet ? "goal-badge badge-success" : "goal-badge badge-warn";
      storyBadgeEl.textContent = storyMet ? t("end_goals.status_story_done", null, "✅ RESUELTA") : t("end_goals.status_story_missing", null, "⚠️ NO RESUELTA");
    }
    if (storyFillEl) {
      storyFillEl.style.width = `${storyPct}%`;
      storyFillEl.className = storyMet ? "goal-fill goal-fill-success" : "goal-fill goal-fill-warning";
    }
    if (storySubEl) {
      if (storyMet) {
        storySubEl.textContent = t("end_goals.story_done", null, "Desentrañaste la trama de corrupción ministerial.");
      } else if (isGameOver && e.storyModeActivated) {
        storySubEl.textContent = `La investigación judicial quedó inconclusa tras tu salida del feed en el turno ${e.turno}.`;
      } else {
        storySubEl.textContent = t("end_goals.story_missing", null, "No lograste desentrañar la causa a tiempo.");
      }
    }

    // ── HORIZONTAL TELEMETRY STRIP ──
    const statsEl=document.getElementById("end1-stats");
    if(statsEl) statsEl.innerHTML=`
      <div class="end-stat-col"><span class="lbl">${t("dashboard.followers", null, "SEGUIDORES")}</span><span class="val c-blue">${e.seguidores.toLocaleString()}</span></div>
      <div class="end-stat-col"><span class="lbl">${t("dashboard.money", null, "DINERO")}</span><span class="val c-gold">$${e.dinero.toLocaleString()}</span></div>
      <div class="end-stat-col"><span class="lbl">${t("dashboard.engagement", null, "ENGAGEMENT")}</span><span class="val c-white">⚡${e.engagement}</span></div>
      <div class="end-stat-col"><span class="lbl">${t("dashboard.mental_health", null, "SALUD MENTAL")}</span><span class="val c-green">${e.saludMental}%</span></div>
    `;

    // ── REPLAYABILITY HOOK: UNLOCKED FINALES COLLECTION (26 FINALES: 14 BASE + 12 HISTORIAS) ──
    try {
      const storageKey = "twitero_unlocked_finales_v18";
      let unlocked = JSON.parse(localStorage.getItem(storageKey) || "[]");
      // Migrar progreso previo si aún no existe en v18
      if (unlocked.length === 0) {
        const oldUnlocked = JSON.parse(localStorage.getItem("twitero_unlocked_finales_v17") || "[]");
        if (oldUnlocked.length > 0) {
          unlocked = [...oldUnlocked];
        }
      }
      // Clave normalizada: los arcos de historia se identifican por arquetipo para no duplicar por género
      const finaleKey = (!isGameOver && e.storyFinished) ? `historia_${getArchKey(e.arquetipo?.id)}` : (f.id || f.titulo);
      if (finaleKey && !unlocked.includes(finaleKey)) {
        unlocked.push(finaleKey);
        localStorage.setItem(storageKey, JSON.stringify(unlocked));
      }
      const totalFinales = 26;
      const count = Math.min(totalFinales, Math.max(1, unlocked.length));
      const pct = Math.round((count / totalFinales) * 100);
      const countEl = document.getElementById("collection-count-text");
      const barFill = document.getElementById("collection-bar-fill");
      if (countEl) countEl.textContent = t("end.discovered", { found: count, total: totalFinales }, `${count} / ${totalFinales} DESCUBIERTOS`) + ` (${pct}%)`;
      if (barFill) barFill.style.width = `${pct}%`;
    } catch(err) {}

    // ── MODAL ROJO DE HISTORIA (EPÍLOGO NARRATIVO EXCLUSIVO) ──
    const NEXT_STORY_ARCH = {
      gamer: "futbolero",
      futbolero: "periodista",
      periodista: "militante",
      militante: "conspiranoico",
      conspiranoico: "cryptobro",
      cryptobro: "techie",
      techie: "gamer",
      onlyfans: "influencer",
      influencer: "humor",
      humor: "podcaster",
      podcaster: "opinologo",
      opinologo: "gamer"
    };

    // Solo abrir el epílogo de caso resuelto si NO es Game Over y se completó efectivamente la historia
    if (!isGameOver && (e.storyFinished || (f.id && f.id.startsWith("metahistoria_")))) {
      const archId = e.arquetipo?.id || "periodista";
      const nextArchId = NEXT_STORY_ARCH[archId] || "periodista";
      const recText = (typeof i18n !== "undefined" && i18n.t(`story_recs.${archId}`)) || "";

      const epilogueModal = document.getElementById("story-epilogue-modal-overlay");
      const epilogueBadge = document.getElementById("story-epilogue-badge");
      const epilogueTitle = document.getElementById("story-epilogue-title");
      const epilogueText = document.getElementById("story-epilogue-text");
      const epilogueBtn = document.getElementById("btn-story-epilogue-ok");
      const epilogueBtnText = document.getElementById("story-epilogue-btn-text");

      if (epilogueBadge) epilogueBadge.textContent = (typeof i18n !== "undefined" && i18n.t("story_epilogue.badge")) || "⚡ CASO RESUELTO // PRÓXIMO EPISODIO";
      if (epilogueTitle) epilogueTitle.textContent = (typeof i18n !== "undefined" && i18n.t("story_epilogue.title")) || "ARCO NARRATIVO COMPLETADO";
      if (epilogueText) epilogueText.textContent = recText;
      if (epilogueBtnText) epilogueBtnText.textContent = (typeof i18n !== "undefined" && i18n.t("story_epilogue.ok_btn")) || "ACEPTAR";

      const closeEpilogue = () => {
        if (epilogueModal) epilogueModal.classList.remove("active");
        this._suppressEndKeyUntil = Date.now() + 500;
      };

      if (epilogueBtn) {
        epilogueBtn.onclick = () => {
          snd.click();
          closeEpilogue();
        };
      }
      const closeTopBtn = document.getElementById("btn-close-story-epilogue");
      if (closeTopBtn) closeTopBtn.onclick = () => closeEpilogue();

      // Abrir con pequeña pausa teatral
      setTimeout(() => {
        if (epilogueModal) {
          snd.ding(0);
          epilogueModal.classList.add("active");
        }
      }, 400);
    }

    const btnShare=document.getElementById("btn-end1-share");
    if(btnShare){
      btnShare.onclick=()=>{
        snd.click();
        const tweetText = this._buildShareScorecard(e, f);
        const modal = document.getElementById("share-modal-overlay");
        const textarea = document.getElementById("modal-share-textarea");
        if(textarea) textarea.value = tweetText;

        const btnOpenX = document.getElementById("btn-modal-open-x");
        if (btnOpenX) {
          btnOpenX.onclick = () => {
            snd.click();
            window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetText), "_blank");
          };
        }
        if(modal) modal.classList.add("active");
      };
    }

    const btnNext=document.getElementById("btn-next-end");
    if(btnNext) btnNext.onclick=()=>{ snd.click(); this._showEnd2(); };

    const btnRestart=document.getElementById("btn-end1-restart");
    if(btnRestart) btnRestart.onclick=()=>{ snd.click(); location.reload(); };

    // Spacebar to restart game on end screen (con guard anti-doble clic)
    const handleEndKey = (ev) => {
      const end1El = document.getElementById("screen-end1");
      const epilogueModal = document.getElementById("story-epilogue-modal-overlay");
      if (epilogueModal && epilogueModal.classList.contains("active")) return;
      if (this._suppressEndKeyUntil && Date.now() < this._suppressEndKeyUntil) return;

      if (end1El && end1El.classList.contains("active") && (ev.code === "Space" || ev.code === "Enter")) {
        ev.preventDefault();
        window.removeEventListener("keydown", handleEndKey);
        btnRestart?.click();
      }
    };
    window.addEventListener("keydown", handleEndKey);

    // ── BOTÓN COPIAR REPORTE DE DEBUG EN PANTALLA FINAL ──
    const copyReportBtn = document.getElementById("btn-end1-copy-report");
    if (copyReportBtn) {
      copyReportBtn.textContent = t("end_goals.btn_copy_report", null, "📋 Copiar Reporte");
      copyReportBtn.onclick = () => {
        snd.click();
        const report = e.generateMatchReport();
        navigator.clipboard.writeText(report).then(() => {
          copyReportBtn.textContent = t("end_goals.report_copied", null, "✓ ¡Reporte copiado!");
          copyReportBtn.classList.add("copied");
          setTimeout(() => {
            copyReportBtn.textContent = t("end_goals.btn_copy_report", null, "📋 Copiar Reporte");
            copyReportBtn.classList.remove("copied");
          }, 3000);
        }).catch(()=>{});
      };
    }

    const copyModalBtn = document.getElementById("btn-modal-copy-tweet");
    if (copyModalBtn) {
      copyModalBtn.onclick = () => {
        snd.click();
        const textarea = document.getElementById("modal-share-textarea");
        const lang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
        const copiedTxt = lang === "ja" ? "✓ コピー完了！" : lang === "en" ? "✓ Text copied!" : "✓ ¡Texto copiado!";
        const copyTxt = lang === "ja" ? "📋 ツイートをコピー" : lang === "en" ? "📋 Copy Tweet" : "📋 Copiar Tweet";
        navigator.clipboard.writeText(textarea.value).then(() => {
          copyModalBtn.textContent = copiedTxt;
          copyModalBtn.classList.add("copied");
          setTimeout(() => {
            copyModalBtn.textContent = copyTxt;
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
    const end2Lang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";
    let endTitle, endNarr;
    if (f.id && f.id.startsWith("metahistoria_")) {
      if (end2Lang === "en") {
        endTitle = `${genderedArch.toUpperCase()} STORY UNLOCKED`;
        endNarr = `You completed ${genderedArch}'s narrative arc. Now you know a little more about what really happened. Click the Decision Tree to review all tweets and clues from this run.`;
      } else if (end2Lang === "ja") {
        endTitle = `${genderedArch}のストーリー解放`;
        endNarr = `${genderedArch}の物語アークを完成させました。舞台裏で本当に何が起きていたのか、少しわかりましたか？決断の軌跡から今回のプレイの全ツイートと手がかりを振り返れます。`;
      } else {
        endTitle = f.titulo;
        endNarr = f.narrativa || "";
      }
    } else {
      endTitle = (typeof i18n !== "undefined" && i18n.t(`endings.${f.id}.titulo`, null, f.titulo)) || f.titulo;
      endNarr = (typeof i18n !== "undefined" && (i18n.t(`endings.${f.id}.narrativa0`, null, f.narrativa) || i18n.t(`endings.${f.id}.narrativa`, null, f.narrativa))) || f.narrativa || "";
    }
    const set=(id,v)=>{ const el=document.getElementById(id); if(el) el.textContent=v; };
    set("end2-final-title", `${f.icon||"🏆"} ${endTitle}`);
    const narr=document.getElementById("end2-narrative"); if(narr) narr.textContent=endNarr;

    const t = (k, p, d) => typeof i18n !== "undefined" ? i18n.t(k, p, d) : d;
    const chartTitle = document.getElementById("end2-chart-title");
    if (chartTitle) chartTitle.textContent = "// " + t("end2.chart_title", { turns: this.eng.turno || 20 }, "EVOLUCIÓN EN EL TIMELINE (20 TURNOS)");
    const legSegs = document.getElementById("end2-legend-segs");
    if (legSegs) legSegs.textContent = "― " + t("end2.legend_followers", null, "SEGUIDORES");
    const legDin = document.getElementById("end2-legend-din");
    if (legDin) legDin.textContent = "― " + t("end2.legend_cash", null, "DINERO");
    
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
        const tTurn = t("tree.turn_label", null, "Turno");
        const tSegs = t("tree.followers", null, "segs");
        const tip=`<strong>${tTurn} ${h.t===0?"0":h.t}</strong><br>👥 ${h.segs.toLocaleString()} ${tSegs}<br>💰 $${(h.din||0).toLocaleString()}`;
        
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
          reportBtn.textContent = typeof i18n !== "undefined" ? i18n.t("end.report_copied", null, "✓ ¡Reporte copiado!") : "✓ ¡Reporte copiado!";
          reportBtn.classList.add("copied");
          setTimeout(() => {
            reportBtn.textContent = typeof i18n !== "undefined" ? i18n.t("end.copy_report", null, "📋 COPIAR REPORTE") : "📋 COPIAR REPORTE (JSON)";
            reportBtn.classList.remove("copied");
          }, 3000);
        }).catch(()=>{});
      };
    }

    const btnEnd2Share = document.getElementById("btn-end2-share");
    if (btnEnd2Share) {
      btnEnd2Share.onclick = () => {
        snd.click();
        const tweetText = this._buildShareScorecard(e, f);
        const modal = document.getElementById("share-modal-overlay");
        const textarea = document.getElementById("modal-share-textarea");
        if(textarea) textarea.value = tweetText;

        const btnOpenX = document.getElementById("btn-modal-open-x");
        if (btnOpenX) {
          btnOpenX.onclick = () => {
            snd.click();
            window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetText), "_blank");
          };
        }
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

    // ── MOBILE: TIMELINE FEED DE TWEETS (en vez de árbol SVG) ──
    const isMobile = window.innerWidth <= 768 || (window.matchMedia && window.matchMedia("(max-width: 900px) and (orientation: landscape)").matches);
    if (isMobile) {
      this._showMobileTimelineFeed();
      return;
    }

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
    const treeLang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";

    positions.forEach((pos, i) => {
      const turn = pos.turn;
      const chosen = turn.chosen;
      const isViral = !!chosen.viral;
      const hasFailed = !chosen.ok;

      // ── Localización del título y tweet de la carta elegida ──
      const chosenCardObj = { id: chosen.id, titulo: chosen.title, texto: chosen.text };
      const locChosenTitle = (treeLang !== "es" && typeof getLocalizedCardTitle === "function")
        ? getLocalizedCardTitle(chosenCardObj, treeLang, e.arquetipo?.id) || chosen.title
        : chosen.title;
      const locChosenTweet = (treeLang !== "es" && typeof getLocalizedCardTweet === "function" && chosen.id !== "evento")
        ? getLocalizedCardTweet(chosenCardObj, treeLang, e.arquetipo?.id) || (chosen.text || chosen.title || "")
        : (chosen.text || chosen.title || "");

      // ── Línea guía horizontal sutil que delimita cada turno ──
      lines += `<line x1="32" y1="${pos.tierY}" x2="${svgW - 32}" y2="${pos.tierY}"
        stroke="${C.lineGuide}" stroke-width="1"/>`;

      // Etiqueta del turno a la izquierda (Space Mono, sobria, sin invadir el centro)
      nodes += `<text x="36" y="${pos.tierY + 22}" font-family="'Space Mono', monospace"
        font-size="10" font-weight="700" fill="${C.textDim}" letter-spacing="1">${(typeof i18n !== "undefined" ? i18n.t("tree.turn_label", null, "TURNO") : "TURNO")} ${String(turn.t).padStart(2,"0")}</text>`;

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
        const _tDiscarded = typeof i18n !== "undefined" ? i18n.t("tree.discarded", null, "Descartada") : "Descartada";
        const altCardObj = { id: alt.id, titulo: alt.title || alt.titulo };
        const locAltTitle = (treeLang !== "es" && typeof getLocalizedCardTitle === "function")
          ? getLocalizedCardTitle(altCardObj, treeLang, e.arquetipo?.id) || (alt.title || alt.titulo || _tDiscarded)
          : (alt.title || alt.titulo || _tDiscarded);
        nodes += `<g class="tree-node alt" data-idx="${i}" data-alt="${ai}" style="cursor:help;">
          <circle cx="${altX}" cy="${altY}" r="14" fill="${C.altNodeBg}" stroke="${C.altNodeBdr}" stroke-width="1.5"/>
          <text x="${altX}" y="${altY + 4}" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${C.textDim}">✕</text>
          <text x="${altX}" y="${altY + 26}" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="${C.textDim}">${locAltTitle.slice(0, 15)}</text>
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
        <text x="${pos.x + 24}" y="${pos.y + 4}" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${titleColor}">${locChosenTitle.slice(0, 22)}</text>
      </g>`;

      tooltipData.push({
        i,
        chosen: { ...chosen, title: locChosenTitle, text: locChosenTweet },
        delta: turn.delta,
        snap: turn.snapshot,
        alts: turn.alternatives
      });

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
    const tTree = (k, d) => typeof i18n !== "undefined" ? i18n.t(k, null, d) : d;
    const genderedArch = typeof getGenderedArchetype === "function"
      ? getGenderedArchetype(e.arquetipo, e.genero) : e.arquetipo.nombre;
    const handleText = e.handle || "@twitero";
    const archBadge = ((typeof i18n !== "undefined" && i18n.t(`archetypes.${e.arquetipo.id}.nombre`)) || genderedArch).toUpperCase();
    const archW = Math.max(80, archBadge.length * 7 + 20);
    const tChosen = tTree("tree.chosen", "Elegido");
    const tDiscarded = tTree("tree.discarded", "Descartado");
    const tSuccess = tTree("tree.success", "Éxito");
    const tRatioLeg = tTree("tree.ratio", "Ratio");
    const treeTurns = tTree("tree.turns", "TURNOS");

    const header = `
      <rect x="0" y="0" width="${svgW}" height="84" fill="${C.bg}"/>
      <line x1="0" y1="84" x2="${svgW}" y2="84" stroke="${C.lineGuide}" stroke-width="1"/>
      <text x="36" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800"
        fill="${C.trunk}" letter-spacing="1.5">${tTree("tree.title", "ÁRBOL DE DECISIONES")} · ${cols} ${treeTurns}</text>
      <text x="36" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="800"
        fill="${C.textWhite}">${handleText}</text>
      <rect x="${36 + handleText.length * 12 + 14}" y="42" width="${archW}" height="20" rx="10"
        fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
      <text x="${36 + handleText.length * 12 + 14 + archW / 2}" y="55" text-anchor="middle"
        font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="700" fill="${C.textMuted}">${archBadge}</text>
      <g transform="translate(${svgW - 320}, 44)">
        <circle cx="8" cy="8" r="5" fill="${C.chosenNodeBg}" stroke="${C.trunk}" stroke-width="1.5"/>
        <text x="18" y="11" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="${C.textMuted}">${tChosen}</text>
        <circle cx="80" cy="8" r="5" fill="${C.altNodeBg}" stroke="${C.altNodeBdr}" stroke-width="1.5"/>
        <text x="90" y="11" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="${C.textMuted}">${tDiscarded}</text>
        <circle cx="170" cy="8" r="4.5" fill="${C.pipOk}"/>
        <text x="180" y="11" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="${C.textMuted}">${tSuccess}</text>
        <circle cx="230" cy="8" r="4.5" fill="${C.pipFail}"/>
        <text x="240" y="11" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="${C.textMuted}">${tRatioLeg}</text>
      </g>`;

    // ── FOOTER STATS SOBRIO (Cero carnaval) ───────────────────────────
    const statsY = svgH - PAD_BOT;
    const endTitulo = (typeof i18n !== "undefined" && i18n.t(`endings.${f.id}.titulo`)) || f.titulo;
    const statsBar = `
      <rect x="0" y="${statsY}" width="${svgW}" height="${PAD_BOT}" fill="${C.bg}"/>
      <line x1="0" y1="${statsY}" x2="${svgW}" y2="${statsY}" stroke="${C.lineGuide}" stroke-width="1"/>
      <text x="36" y="${statsY + 28}">
        <tspan font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${C.textMuted}">${tTree("tree.stats_followers", "SEGUIDORES:")} </tspan>
        <tspan font-family="'Space Mono', monospace" font-size="11" font-weight="700" fill="${C.textWhite}">${e.seguidores.toLocaleString()}</tspan>
      </text>
      <text x="260" y="${statsY + 28}">
        <tspan font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${C.textMuted}">${tTree("tree.stats_cash", "DINERO:")} </tspan>
        <tspan font-family="'Space Mono', monospace" font-size="11" font-weight="700" fill="${C.textWhite}">$${e.dinero.toLocaleString()}</tspan>
      </text>
      <text x="440" y="${statsY + 28}">
        <tspan font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${C.textMuted}">${tTree("tree.stats_health", "SALUD:")} </tspan>
        <tspan font-family="'Space Mono', monospace" font-size="11" font-weight="700" fill="${C.textWhite}">${e.saludMental}%</tspan>
      </text>
      <text x="590" y="${statsY + 28}">
        <tspan font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${C.textMuted}">${tTree("tree.stats_final", "FINAL:")} </tspan>
        <tspan font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="${C.trunk}">${endTitulo}</tspan>
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
            ${tTree("tree.title", "ÁRBOL DE DECISIONES")}
          </span>
          <div style="display:flex;gap:10px;">
            <button id="btn-tree-copy" style="background:#0a1828;border:1px solid ${C.trunk};color:#fff;
              padding:7px 16px;border-radius:6px;font-size:11px;cursor:pointer;font-weight:700;font-family:'Plus Jakarta Sans', sans-serif;">
              📋 ${tTree("tree.copy_image", "Copiar imagen")}
            </button>
            <button id="btn-tree-close" style="background:#0c101c;border:1px solid #243048;color:#94A3B8;
              padding:7px 14px;border-radius:6px;font-size:11px;cursor:pointer;font-family:'Plus Jakarta Sans', sans-serif;">
              ✕ ${tTree("tree.close", "Cerrar [Esc]")}
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
          background:#0b1120;border:1px solid rgba(29,155,240,0.5);border-radius:10px;
          padding:14px 16px;font-size:13px;color:#fff;min-width:280px;max-width:380px;
          box-shadow:0 14px 45px rgba(0,0,0,0.9);pointer-events:none;line-height:1.55;
          backdrop-filter:blur(10px);font-family:'Plus Jakarta Sans', sans-serif;"></div>
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
        const tweetText = td.chosen.text || td.chosen.title || "";
        const turnLabel = tTree("tree.turn_label", "Turno");
        const outcomeLabel = td.chosen.ok
          ? (isViral ? tTree("tree.viral_impact", "✨ IMPACTO VIRAL") : tTree("tree.tweet_success", "✅ TWEET EXITOSO"))
          : tTree("tree.tweet_ratio", "❌ RATIO EN EL TIMELINE");
        const followersLbl = tTree("tree.followers", "seguidores");
        const engLbl = tTree("tree.engagement_label", "engagement");
        const hateLbl = tTree("tree.hate_gen", "odio generado");
        const boosterLbl = tTree("tree.booster_label", "🚀 Booster:");
        const balanceLbl = tTree("tree.end_of_turn", "Balance al cierre de turno:");
        tooltip.innerHTML = `
          <div style="color:${C.trunk};font-weight:800;font-size:13px;margin-bottom:6px;">
            ${td.chosen.icon || "💬"} ${td.chosen.title || "Carta"} &nbsp;
            <span style="color:#64748B;font-size:11px;">(${turnLabel} ${log[idx].t})</span>
          </div>
          ${tweetText ? `<div style="font-family:'Plus Jakarta Sans', sans-serif;font-size:13.5px;color:#f1f5f9;background:rgba(255,255,255,0.08);border-left:3px solid ${C.trunk};padding:9px 12px;margin:8px 0;border-radius:4px;line-height:1.45;font-weight:500;">"${tweetText}"</div>` : ""}
          <div style="color:${td.chosen.ok ? (isViral ? C.pipViral : C.pipOk) : C.pipFail};font-weight:700;font-size:12px;">
            ${outcomeLabel}
            &nbsp;<span style="color:#8b98a9;font-size:11px;font-family:'Space Mono', monospace;">[D${td.chosen.roll}/≤${td.chosen.chance}%]</span>
          </div>
          <hr style="border-color:rgba(255,255,255,0.1);margin:8px 0;">
          <div style="font-weight:600;font-size:12px;">👥 ${td.delta.segs >= 0 ? "+" : ""}${(td.delta.segs||0).toLocaleString()} ${followersLbl}</div>
          <div style="font-size:12px;">⚡ ${td.delta.eng >= 0 ? "+" : ""}${td.delta.eng||0} ${engLbl}</div>
          ${td.delta.hate ? `<div style="color:${C.pipFail};font-size:12px;">💀 +${td.delta.hate} ${hateLbl}</div>` : ""}
          ${td.chosen.booster ? `<div style="color:${C.trunk};font-size:12px;">${boosterLbl} ${td.chosen.booster}</div>` : ""}
          <hr style="border-color:rgba(255,255,255,0.1);margin:8px 0;">
          <div style="color:#64748B;font-size:10.5px;text-transform:uppercase;">${balanceLbl}</div>
          <div style="font-family:'Space Mono', monospace;font-size:11.5px;">👥 ${(snap.segs||0).toLocaleString()} &nbsp;·&nbsp; 💰 $${(snap.dinero||0).toLocaleString()} &nbsp;·&nbsp; ❤️ ${snap.salud||0}%</div>`;
        tooltip.style.display = "block";
      });
      node.addEventListener("mousemove", ev => {
        const r = overlay.getBoundingClientRect();
        tooltip.style.left = Math.min(ev.clientX + 16, r.right - 390) + "px";
        tooltip.style.top  = Math.min(ev.clientY + 8,  r.bottom - 260) + "px";
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
        const discardedLbl = tTree("tree.discarded_turn", "OPCIÓN DESCARTADA · TURNO");
        const discardedDesc = tTree("tree.discarded_desc", "Esta carta formaba parte de tu mano y decidiste no jugarla.");
        tooltip.innerHTML = `
          <div style="color:#94A3B8;font-weight:700;margin-bottom:4px;">
            ${alt.icon || "🃏"} ${alt.title || "Carta descartada"}
          </div>
          <div style="color:${C.pipFail};font-size:10px;font-weight:700;">${discardedLbl} ${log[idx].t}</div>
          <div style="color:#64748B;margin-top:4px;font-size:11px;">${discardedDesc}</div>`;
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
            `Tuitero — ${handleText} (${genderedArch})\n` +
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

  // ── MOBILE: TIMELINE FEED DE TWEETS (Reemplazo del árbol en pantallas chicas) ──
  _showMobileTimelineFeed() {
    const e = this.eng;
    const log = e.gameLog;
    if (!log || log.length === 0) return;

    let overlay = document.getElementById("mobile-timeline-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "mobile-timeline-overlay";
      overlay.className = "mobile-timeline-overlay";
      document.body.appendChild(overlay);
    }

    const currentAvatar = e.getAvatar();
    const genderedArch = (typeof i18n !== "undefined" && i18n.t(`archetypes.${e.arquetipo.id}.nombre`)) || (typeof getGenderedArchetype === "function" ? getGenderedArchetype(e.arquetipo, e.genero) : e.arquetipo.nombre);

    const tViral = typeof i18n !== "undefined" ? i18n.t("mobile_timeline.viral", null, "✨ VIRAL") : "✨ VIRAL";
    const tSuccess = typeof i18n !== "undefined" ? i18n.t("mobile_timeline.success", null, "✅ ÉXITO") : "✅ ÉXITO";
    const tRatio = typeof i18n !== "undefined" ? i18n.t("mobile_timeline.ratio", null, "❌ RATIO") : "❌ RATIO";
    const tHate = typeof i18n !== "undefined" ? i18n.t("mobile_timeline.hate", null, "odio") : "odio";
    const feedLang = typeof i18n !== "undefined" ? i18n.getLanguage() : "es";

    const cardsHtml = log.map(entry => {
      const ch = entry.chosen;
      const isSuccess = ch.ok;
      const isViral = ch.viral;
      const resultBadge = isViral
        ? `<span class="mt-badge viral">${tViral}</span>`
        : isSuccess
        ? `<span class="mt-badge ok">${tSuccess}</span>`
        : `<span class="mt-badge fail">${tRatio}</span>`;

      const cardObj = { id: ch.id, titulo: ch.title, texto: ch.text };
      const locTitle = (feedLang !== "es" && typeof getLocalizedCardTitle === "function")
        ? getLocalizedCardTitle(cardObj, feedLang, e.arquetipo?.id) || ch.title
        : ch.title;
      const locTweet = (feedLang !== "es" && typeof getLocalizedCardTweet === "function" && ch.id !== "evento")
        ? getLocalizedCardTweet(cardObj, feedLang, e.arquetipo?.id) || (ch.text || ch.title || "")
        : (ch.text || ch.title || "");

      const tweetText = locTweet;
      const segsDelta = entry.delta?.segs || 0;
      const segsClass = segsDelta >= 0 ? "pos" : "neg";
      const segsStr = (segsDelta >= 0 ? "+" : "") + segsDelta.toLocaleString();

      return `
      <div class="mobile-feed-card ${!isSuccess ? 'is-fail' : ''}">
        <div class="mobile-feed-top">
          <div class="mobile-feed-avatar">${currentAvatar}</div>
          <div class="mobile-feed-meta">
            <span class="mobile-feed-name">${genderedArch}</span>
            <span class="mobile-feed-handle">${e.handle}</span>
            <span class="mobile-feed-turn">· T${entry.t}</span>
          </div>
          <div class="mobile-feed-status">${resultBadge}</div>
        </div>
        <div class="mobile-feed-title">${ch.icon || "💬"} ${locTitle}</div>
        ${tweetText ? `<div class="mobile-feed-text">"${tweetText}"</div>` : ''}
        <div class="mobile-feed-stats">
          <span class="mt-stat ${segsClass}">👥 ${segsStr}</span>
          <span class="mt-stat">⚡ +${entry.delta?.eng || 0} eng</span>
          ${entry.delta?.hate ? `<span class="mt-stat neg">💀 +${entry.delta.hate} ${tHate}</span>` : ''}
          ${ch.booster ? `<span class="mt-stat booster">🚀 ${ch.booster}</span>` : ''}
        </div>
      </div>
      `;
    }).join("");

    const tTitle = typeof i18n !== "undefined" ? i18n.t("mobile_timeline.title", null, "📱 TIMELINE DE LA PARTIDA") : "📱 TIMELINE DE LA PARTIDA";
    const tSub = typeof i18n !== "undefined"
      ? i18n.t("mobile_timeline.sub", { handle: e.handle, count: log.length }, `${e.handle} · ${log.length} TWEETS PUBLICADOS`)
      : `${e.handle} · ${log.length} TWEETS PUBLICADOS`;
    const tClose = typeof i18n !== "undefined" ? i18n.t("mobile_timeline.close_btn", null, "CERRAR TIMELINE ✕") : "CERRAR TIMELINE ✕";

    overlay.innerHTML = `
      <div class="mobile-timeline-box">
        <div class="mobile-timeline-header">
          <div>
            <div class="mobile-timeline-title">${tTitle}</div>
            <div class="mobile-timeline-sub">${tSub}</div>
          </div>
          <button class="mobile-timeline-close" id="btn-close-mobile-timeline">✕</button>
        </div>
        <div class="mobile-timeline-scroll">
          ${cardsHtml}
        </div>
        <div class="mobile-timeline-footer">
          <button class="btn btn-primary" id="btn-ok-mobile-timeline" style="width:100%;">${tClose}</button>
        </div>
      </div>
    `;

    overlay.classList.add("active");

    const closeFeed = () => {
      snd.click();
      overlay.classList.remove("active");
    };

    document.getElementById("btn-close-mobile-timeline")?.addEventListener("click", closeFeed);
    document.getElementById("btn-ok-mobile-timeline")?.addEventListener("click", closeFeed);
  }
}