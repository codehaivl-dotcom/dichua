# AGENTS — Đi Chùa Online: Cầu An · Duyên Lành (OWNER V4 2026-11-02)

**LATEST OWNER OVERRIDE / NON-NEGOTIABLE:** This repository is the **game content/spec** for Spawn. Spawn already provides avatar engine/rendering, account/display names, join/party/network, chat/DM/friends/block/report, basic menus and loading. **NEVER** rebuild TS/Fastify/ws/Postgres/auth/cookie/Khách xxxx/standalone graphics or a duplicate 18+ game gate because some old paragraph said so. Spawn API details NOT in this repo are UNKNOWN until inspected. If a capability needed for private match or global notifications is missing, mark PENDING_SPAWN_API and do not fake it. Docs/03,06,07,09,14 and docs/17 are current authoritative implementation contracts; earlier conflicting passages are historical.

## Product identity
- Game title: **Đi Chùa Online – Cầu An · Duyên Lành**. Core is going to a Vietnamese pagoda, respectful worship/meditation, real scripture, scenery, community; NOT a dating-only or idle clicker. Spawn social features supplement it.
- All three places: Chùa Sen, Trúc, Mây. Warm detailed 3D stylized Vietnamese architecture, natural scale, no forced low-poly or Chinese/Japanese palace. Avatar clothing modest, respectful; docs/15 and data/avatar-wardrobe.v1.json.
- Temple systems T01–T10 remain mandatory scope, real sutra bibliography and cleared audio gate in docs/11–13, no fake Play. Folklore/love/star/cut ties go in physically separate areas (not main hall). Never claim superstition changes real fate or fabricate Buddhist scripture.

## Game-only activities
- Legacy `soloOracle` (12 loveSolo cards at ORACLE_SOLO), `pairOracle` (12 pairLove at ORACLE_PAIR), `starOffering` (exactly **8 sockets**) must not collide with NEW `folkFunSolo` (32 cards at FUN_ORACLE_SOLO), `folkFunPair` (9 outcomes at FUN_ORACLE_PAIR), and optional `folkFunStars` 8-socket skin using same star system. Exact config in data/activities.v1.json, data/zones.v1.json, data/folk-fun.v1.json, docs/17.
- Rare Global sharing = explicit opt-in preview, no other players' names, caps 1/user/day and 1/server/5 minutes if verified by Spawn. Nearby 0–3 opt-in real players only within 16m, same room and block-aware; choose symbol SEN/CHUONG/TRA once at opt-in (5m) and reuse in duo result. Never fake users.
- Six authored short optional micro-games with exact input/win/fail in folk-fun.v1.json; one may trigger after particular cards, never required to read/store a quẻ or participate in temple practices.

## Safety and production rules
- Private wishes by default, moderated public templates only. Quẻ fun is game-authored fiction, **not** Buddhist canon or actual fate prediction. No paid rerolls/merit/purification, no rank pressure for chanting/bows. No explicit 18+ signup gate added to game; inherit Spawn youth safeguards, disable risky features if not verifiable.
- Only real Spawn world run counts as IMPLEMENTED. QA requires real player interactions, mic/camera permissions as appropriate, API traces, phone/desktop, 30-player performance and failure cases; docs/data validation is NOT runnable gameplay.
- License authentic sutra translation vs recorded audio separately; 2 cleared VN audio tracks must really play for full-release acceptance.
- Do NOT just audit endlessly. Build playable Spawn Chùa Sen first, then improve via docs/09,14 phases. Report IMPLEMENTED / TESTED / FAILED / UNVERIFIED / PENDING_SPAWN_API / NEXT, with actual evidence.
