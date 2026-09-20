#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Twitero v15 ? Build Pipeline
Concatena los m?dulos de content/ y src/ en js/bundle.js
"""
import os, re

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

ORDERED_MODULES = [
    # 1. Metadatos y configuraciones
    ("content", "archetypes.js"),
    ("content", "shop", "boosters.js"),

    # 2. Contenido de cartas
    ("content", "cards", "memes.js"),
    ("content", "cards", "conflict.js"),
    ("content", "cards", "topics.js"),

    # 3. Contenido de eventos
    ("content", "events", "dilemmas.js"),
    ("content", "events", "cancellations.js"),
    ("content", "events", "fortuities.js"),
    ("content", "events", "super-habilidades.js"),
    ("content", "events", "viral-events.js"),
    ("content", "events", "metahistory.js"),

    # 4. Motores de juego y presentaci?n
    ("src", "audio", "sound-engine.js"),
    ("src", "core", "game-engine.js"),
    ("src", "ui", "ui-engine.js"),
    ("src", "main.js")
]

def clean_code(code):
    code = re.sub(r'export\s+const\s+', 'const ', code)
    code = re.sub(r'export\s+let\s+', 'let ', code)
    code = re.sub(r'export\s+function\s+', 'function ', code)
    code = re.sub(r'export\s+default\s+', '', code)
    code = re.sub(r'export\s*\{[^}]*\};?', '', code)
    code = re.sub(r'module\.exports\s*=\s*\{[^}]*\};?', '', code)
    return code.strip()

def build():
    chunks = [
        "/* ═══════════════════════════════════════════════════════\n"
        "   js/bundle.js · Tuitero v19 · Definitive Release\n"
        "   Arquitectura Senior Modular · Clean Code & Data-Driven\n"
        "   Pensado por @kohantoys | https://x.com/kohantoys\n"
        "   ═══════════════════════════════════════════════════════ */\n"
    ]

    print("== Compilando Tuitero v19 ==")
    for parts in ORDERED_MODULES:
        fpath = os.path.join(BASE_DIR, *parts)
        rel_path = "/".join(parts)
        if not os.path.exists(fpath):
            raise FileNotFoundError(f"Error: No se encontr? el m?dulo {fpath}")
        with open(fpath, "r", encoding="utf-8") as f:
            raw = f.read()
            cleaned = clean_code(raw)
            chunks.append(f"\n/* ?? M?DULO: {rel_path} ?? */\n{cleaned}\n")
            print(f"  ? {rel_path} ({len(cleaned):,} chars)")

    bundle_path = os.path.join(BASE_DIR, "js", "bundle.js")
    full_content = "\n".join(chunks)

    with open(bundle_path, "w", encoding="utf-8") as f:
        f.write(full_content)

    print(f"\n? Compilaci?n exitosa: {bundle_path}")
    print(f"?? Tama?o total: {len(full_content):,} caracteres\n")

if __name__ == "__main__":
    build()
