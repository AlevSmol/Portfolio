---
title: "AxoltHost — Launcher Panel"
resume: "Panel administrativo web en Angular 20 para gestionar instancias, whitelists y códigos del sistema AxoltHost."
description: "Dashboard administrativo construido con Angular 20 y TailwindCSS para que los operadores de AxoltHost gestionen los servidores Minecraft, los códigos de registro emitidos a los jugadores, y la whitelist de cada instancia. Incluye edición de assets con cropperjs y exportación de archivos comprimidos."
details: "Single Page Application en Angular 20 standalone con TailwindCSS, integrada al backend Laravel vía OAuth2. Funciones avanzadas: edición de imágenes con cropperjs (avatares, banners), generación y descarga de bundles con jszip, y suscripción a eventos en tiempo real desde Reverb."
image: ["projects/axolthost/panel01.png","projects/axolthost/panel02.png", "projects/axolthost/panel03.png"]
tags: ["Angular", "TypeScript", "TailwindCSS", "AxoltHost"]
link: "https://github.com/AlevSmol"
date: 2026-02-10
featured: false
status: "completed"
---
AxoltHost Panel es la interfaz administrativa del ecosistema AxoltHost. Permite a los operadores gestionar instancias de servidores Minecraft, emitir códigos de registro, administrar whitelists y monitorizar el estado del sistema en tiempo real.

Es la última pieza desarrollada del sistema, sumándose al launcher desktop y al backend Laravel para cerrar el ciclo completo de operación.

### Stack técnico
- Angular 20 (componentes standalone)
- TailwindCSS para el sistema de diseño
- cropperjs para edición de imágenes
- jszip para empaquetado y exportación
- Cliente OAuth2 + WebSockets contra AxoltHost API
