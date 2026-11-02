# 14 — Accepted implementation order (Spawn override, 2026-11-02)

**This supersedes prior TS/Fastify/PostgreSQL stand-alone instructions.** Spawn already handles renderer, login, display names, avatars/network, chat/DM/friends/block/report, room party, menu and loading. Implement only game-side assets/activities. For full feature scope see docs/00, 10–13; module docs/17.

1. Confirm existing Spawn player/zone/scene lifecycle APIs with actual code evidence, no invented methods. Build a playable Chùa Sen visit with gate, hall, camera, collision and one usable ritual.
2. Hook existing Spawn identity/social/quiet zone and test real 2-account presence, 16m proximity, block/report and invites.
3. Build authentic in-game practice with mala, 9/27/108 bows, incense, bell, wooden fish, meditation, tea, hoa đăng and xăm with correct visuals/state. Keep fiction separated from scripture.
4. Implement older `soloOracle`/`pairOracle` (12/12 cards) and `starOffering` (8 sockets), `cutTies` per docs/01 and 10.
5. Implement new `folkFunSolo` and `folkFunPair` using new anchors in data/zones.v1.json and 32/9 source pools in data/folk-fun.v1.json; 6 short optional micro-games. `folkFunStars` is a selectable 8-socket comedy skin, not an extra set of stars.
6. Verify Spawn's privacy-safe nearby opt-in matching and Global announcement APIs. If available, launch consented matching and explicit rare Global sharing with caps/quiet-zone suppression. If unverified or missing, keep disabled, not faked.
7. Three genuinely playable places Chùa Sen/Trúc/Mây, events at VN schedule, opt-in cosmetic progression, rights-safe scripture listening and two cleared Vietnamese playable tracks for FULL release.
8. Optimize architecture, outfits and assets, 30-person performance, runtime safety/privacy audit and phone/desktop E2E. Every PR deliver actual playable Spawn evidence; not just JSON, docs or concept images.

## Mandatory art review
Follow docs/15: formal modest pagoda attire for all players/NPC; no miniskirts/short shorts/revealing shoulders; avatar clothing should not clip during bows/sits. Docs/16 concept images are references, not finished game screenshots. Reflected 3D from gameplay must match user-selected warm, detailed Vietnamese stylized style.

## Blocking API evidence
For every new engine-dependent action, record: source API signature, observed runtime behavior, one real successful case, one denial/failure case, and fallback. No independent database, login, Fastify/ws/Three.js recreation.
