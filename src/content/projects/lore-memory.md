---
title: "Lore Memory"
resume: "Sistema de memoria persistente para agentes de IA con arquitectura de 5 capas y servidor MCP."
description: "Un sistema que permite a agentes CLI mantener memoria entre sesiones mediante knowledge pages, skills procedurales y snapshots. Implementado como monorepo con 4 paquetes."
details: "Monorepo TypeScript con paquetes core, mcp-server, cli y app principal. Almacenamiento basado en archivos markdown con indexación semántica."
image: ["projects/lorememory/lore-memory.png"]
tags: ["TypeScript", "Node.js"]
link: "https://github.com/Kairos-Ngine/lore-memory"
date: 2026-04-15
featured: true
status: "in-progress"
---
Lore Memory es un sistema de memoria persistente diseñado para agentes de inteligencia artificial que operan en entornos CLI. Permite mantener contexto, decisiones y procedimientos entre sesiones de trabajo.

El sistema implementa una arquitectura de 5 capas (L1-L5) que separa snapshots inmutables, knowledge declarativo, skills procedurales, y fragmentos episódicos temporales.
