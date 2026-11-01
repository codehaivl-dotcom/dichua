> **OWNER V3 EXPANSION (2026-11-01):** New required features supersede any conflicting older MVP exclusion. See docs/10–14 and AGENTS.md. Sections below are retained as baseline for initial social/folklore phase, not the entire full-game scope.

# 09 — Agent execution plan, acceptance gates, simulator/tools

## Phase 0 — Repo/runtime foundation
Setup TS monorepo pnpm, Vite client, Three renderer, Fastify WS server, shared schema validation, DB migrations, Vitest/Playwright, lint/typecheck CI, dev script and local HTTPS fixture if feasible. Startup instructions in README, no credentials hardcoded. DONE when one command launches real world+server and healthz, tests runnable.

## Phase 1 — True 3D playable vertical slice
Build blockout map of gate/courtyard/hall/tea/love/folk (clearly TEMP), 4 compatible avatar presets or 1 prototype rig if other 3 flagged PENDING, collision/nav, third-person camera and desktop/mobile inputs, real menu/CTA, show 1 NPC and solo oracle with server-selected authored quẻ. DONE: user can play start->walk->ritual->leave/rejoin; mobile+desktop browser video evidence. Do NOT polish all models first.

## Phase 2 — Multiplayer + social core
Authoritative room, two real browsers, movement/snapshot/collision/seat sync, WS reconnect, guest persistent identity, proximity chat, mute/block/report, friend request accept+storage+list, DM mutual, join friend room. DONE: E05 social prerequisites + E08/E09/E11/E12 tests pass. No social UI placeholders allowed.

## Phase 3 — Ritual activities and co-op
Solo oracle complete UX/content, pair oracle both-consent+shared card, dâng sao full stages, fictional cut-ties 3-stage quest, tea invites and photo (local). DONE: E04-07/E10 with real server, disconnect/cancel paths.

## Phase 4 — Art/animations/audio/UI production
Replace TEMP with authored licensed 3D Vietnamese pagoda/shops/gardens, 4 avatars, NPCs, clips and stage VFX, soft sound, UX responsive, optimization LOD and compression, full localization VN. DONE: reference comparison, no low-poly-only default, no camera roof clipping, measured FPS.

## Phase 5 — Hardening and launch
Security/moderation, 30 client load, safe content review, GDPR/privacy and asset licenses, deletion/report review, real cloud staging HTTPS/WSS, CI, regression all E01–E16. DONE: zero P0/P1, owner review of cultural sensitive content, full evidence.

## Mandatory utilities
- Dev overlay: FPS, drawcalls, triangles, camera/collision, roomId, real playerCount, activeZone, interactive targets/IDs, server tick latency. Must be hidden in prod unless debug role.
- World editor data: interactive anchors and zones in JSON, schema validates coordinates within world bounds; gizmo preview in dev.
- Two-browser helper: launch independent sessions and record movement/chat/friend/invite ritual.
- WS bot/load simulator: 30 scripted clients with deterministic seeds, separate IDs, actions, latency/jitter/disconnect injection; cannot count bots as real visitors in public stats.
- Cut-ties puzzle simulator: enumerate all 3^3 ring configurations to prove <=6 clicks and skip.
- Fortune check: enforce 12 solo/12 pair/4 star/8 cut authored cards, unique IDs, no scary text/placeholder.
- Invite race simulator: 2 simultaneous invites, block during request, disconnect during ritual, duplicate command.
- Build reports: bytes, runtime GPU budget/LOD, mobile/desktop screenshots, audio autoplay compliance.
- Privacy test: delete guest then verify links/messages/displays removed as policy.

## Agent instruction
Start coding Phase 0–1; not another architecture brainstorm or documentation expansion. Each sprint report only: IMPLEMENTED, TESTED (commands/evidence), FAILED, UNVERIFIED, NEXT. Bring blockers to owner only when architecture/code license/cultural depiction requires a product decision.


### V3 extra phases REQUIRED for full product
Phase 6: 10 temple practice systems (mala, 108 lạy, sutra interface, gõ mõ, meditation, lantern, offerings, xăm, cầu an, journal). Phase 7: five sourced real Buddhist canon entries, official external listen and **2** rights-cleared internal Vietnamese audio tracks playable with metadata; license pending = BLOCKED and never claimed done. Phase 8: CHUA_TRUC and CHUA_MAY fully traversable multiplayer maps, map transfers, four community events, six game-only cosmetic levels + opt-in friend leaderboard. Follow docs/14-V3-IMPLEMENTATION.md. Agent still starts Phase 0/1 real runnable, then proceeds rather than re-auditing.
