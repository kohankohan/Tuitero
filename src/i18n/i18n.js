/**
 * Tuitero v19 — Motor Central de Internacionalización (i18n)
 * Soporta Español (es), Inglés (en) y Japonés (ja) con interpolación de variables
 * y sistema reactivo de actualización.
 */

class I18nEngine {
  constructor() {
    this.currentLang = this._getInitialLanguage();
    this.dictionaries = {
      es: {},
      en: {},
      ja: {}
    };
    this.listeners = [];
  }

  _getInitialLanguage() {
    try {
      const saved = localStorage.getItem("twitero_preferred_lang");
      if (saved && ["es", "en", "ja"].includes(saved)) return saved;

      const navLang = (navigator.languages && navigator.languages[0]) || navigator.language || "";
      const code = navLang.toLowerCase().split("-")[0];
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";

      if (code === "ja" || tz.includes("Tokyo") || tz.includes("Japan")) return "ja";

      const spanishTzKeywords = [
        "Argentina", "Buenos_Aires", "Cordoba", "Santiago", "Montevideo", "Asuncion",
        "Lima", "Bogota", "Caracas", "La_Paz", "Mexico", "Cancun", "Merida", "Monterrey",
        "Guatemala", "Costa_Rica", "Panama", "El_Salvador", "Tegucigalpa", "Managua",
        "Madrid", "Ceuta", "Canary", "Havana", "Santo_Domingo", "Puerto_Rico", "Guayaquil", "Quito"
      ];
      if (code === "es" || spanishTzKeywords.some(k => tz.includes(k))) return "es";

      return "en";
    } catch (_) {
      return "es";
    }
  }

  registerDictionary(lang, data) {
    if (!this.dictionaries[lang]) this.dictionaries[lang] = {};
    Object.assign(this.dictionaries[lang], data);
  }

  getLanguage() {
    return this.currentLang;
  }

  setLanguage(lang) {
    if (!["es", "en", "ja"].includes(lang)) return;
    this.currentLang = lang;
    try {
      localStorage.setItem("twitero_preferred_lang", lang);
    } catch (_) {}
    this.notify();
  }

  onLanguageChange(cb) {
    if (typeof cb === "function") this.listeners.push(cb);
  }

  notify() {
    this.listeners.forEach(cb => {
      try { cb(this.currentLang); } catch (e) { console.error("i18n listener error:", e); }
    });
  }

  /**
   * Obtiene la traducción para una clave con notación de punto ("splash.start")
   * Soporta interpolación {nombre} y fallback al español.
   */
  t(keyPath, params = null, defaultVal = null) {
    const resolve = (dict, path) => {
      if (!dict) return null;
      const parts = path.split(".");
      let cur = dict;
      for (const part of parts) {
        if (cur && typeof cur === "object" && part in cur) {
          cur = cur[part];
        } else {
          return null;
        }
      }
      return typeof cur === "string" ? cur : null;
    };

    let str = resolve(this.dictionaries[this.currentLang], keyPath);
    if (!str && this.currentLang !== "es") {
      str = resolve(this.dictionaries.es, keyPath);
    }
    if (!str) {
      return defaultVal != null ? defaultVal : null;
    }

    if (params && typeof params === "object") {
      str = str.replace(/\{(\w+)\}/g, (match, p) => {
        return params[p] !== undefined ? params[p] : match;
      });
    }

    return str;
  }
}

// Instancia global única de i18n
const i18n = new I18nEngine();
