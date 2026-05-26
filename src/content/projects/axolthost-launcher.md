---
title: "AxoltHost — Launcher"
resume: "Launcher de escritorio para Minecraft con auto-actualización, integración con Discord y autenticación contra el backend de AxoltHost."
description: "Aplicación de escritorio multiplataforma construida con Electron y React que permite a los jugadores descargar, actualizar y lanzar instancias de Minecraft conectadas al ecosistema AxoltHost. Integra Discord Rich Presence, descarga incremental de assets y un sistema de actualización automática."
details: "Desarrollado con electron-vite para builds rápidos, React + TypeScript en el renderer, electron-builder para empaquetado multiplataforma (Windows, macOS, Linux), y electron-updater para actualizaciones automáticas. Se comunica con AxoltHost API para autenticación OAuth2 y gestión de instancias."
image: ["projects/axolthost/launcher01.png","projects/axolthost/launcher02.png", "projects/axolthost/launcher03.png"]
tags: ["Electron", "React", "TypeScript", "AxoltHost"]
link: "https://github.com/AlevSmol"
date: 2025-12-15
featured: true
status: "completed"
---
AxoltHost Launcher es el cliente de escritorio del ecosistema AxoltHost, una plataforma de hosting de Minecraft. Permite a los jugadores acceder a las instancias del servidor sin configuración manual de Java ni mods.

El launcher forma parte de un sistema mayor compuesto por tres piezas: este cliente desktop, una API REST en Laravel para autenticación y gestión, y un panel administrativo en Angular para operadores.

### Características principales
- Auto-actualización transparente con electron-updater
- Descarga incremental de archivos del juego y mods
- Integración con Discord Rich Presence
- Autenticación OAuth2 contra el backend AxoltHost
- Builds nativos para Windows, macOS y Linux
