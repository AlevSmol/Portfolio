---
title: "AxoltHost — Launcher API"
resume: "Backend REST en Laravel 12 con OAuth2, websockets y gestión de instancias de servidores Minecraft."
description: "API central del ecosistema AxoltHost que orquesta autenticación, whitelist, códigos de registro e instancias de servidores. Implementa OAuth2 con Laravel Passport y comunicación en tiempo real mediante Laravel Reverb."
details: "Stack Laravel 12 sobre PHP 8.2 con MySQL como base de datos. Usa Passport para emisión de tokens OAuth2 consumidos por el launcher desktop, y Reverb (WebSockets) para eventos en tiempo real hacia el panel administrativo. Arquitectura orientada a recursos con relaciones entre Instances, Whitelists, WhitelistEntries y RegistrationCodes."
image: ["projects/axolthost/axolthost.png"]
tags: ["Laravel", "PHP", "MySQL", "AxoltHost"]
link: "https://github.com/AlevSmol"
date: 2026-01-20
featured: false
status: "completed"
---
AxoltHost API es el núcleo del ecosistema AxoltHost. Centraliza la autenticación de usuarios, la gestión de servidores Minecraft (instancias), las whitelists por servidor y los códigos de registro que los jugadores canjean desde el launcher.

Es consumida tanto por el launcher de escritorio (autenticación OAuth2, validación de acceso) como por el panel administrativo (administración de instancias, monitorización en vivo vía websockets).

### Stack técnico
- Laravel 12 + PHP 8.2
- Laravel Passport (OAuth2)
- Laravel Reverb (WebSockets para eventos en tiempo real)
- MySQL
- API REST orientada a recursos
