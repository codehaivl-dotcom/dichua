# 06 — Spawn-native architecture and capability verification (OWNER V4, 2026-11-02)

> **Owner decision:** Build the game *inside Spawn's existing world/player platform*. The old stand-alone recipe "Vite/Three.js + Fastify/ws + PostgreSQL + guest cookies" is canceled for this game. Do NOT scaffold auth, network, WS server, chat, friends, DM, report, graphics menu/loading, or an alternative 3D renderer. If a required capability is missing, report `PENDING_SPAWN_API`; owner must decide alternative before adding infrastructure.

## Runtime responsibilities
**Spawn owns:** player identity/display name, account state, avatar controller/camera, rendering engine, place lifecycle, networking/presence, room/party, chat, friend/DM, block/report/mute, default UI/loading/menu and platform persistence as available.

**Game owns:** Chùa Sen / Trúc / Mây place scenes, 3D models/colliders, outfit assets, NPC/dialogue, interaction hooks, immersive animations, game-only activity state, curated quẻ data, selection rules, localized UI overlays, journal / progression if supported, audio assets, privacy preferences and quality gates.

**Do not assume exact Spawn method names.** Before coding each dependent feature, find the actual engine API and record its signature/source file, observed behavior and permission contract. Do not silently duplicate platform features. No invented endpoints.

## Spawn capability checklist (UNKNOWN until demonstrated)
| Capability | Required by | Fallback if unsupported |
|---|---|---|
| Authoritative game action/state & replay-safe receipt `(SpawnPlayerId, commandId)` | Weighted quẻ, awards, draw cooldown | Block verified draw/Global until server authority mechanism approved |
| Player position/zone, privacy-safe opt-in nearby search, block state | Folk pair suggestions within 16m | Disable suggestion, allow manually invited mutual friends only if safe |
| Invitation + accept/decline/block | Quẻ đôi, tea co-op | Disable duo activity rather than fake consent |
| Whole-server announcement + rate-limit control | Rare quẻ Global | Existing room/friend share, if supported; otherwise private only |
| Per-player UI suppression by `Z_HALL` | Quiet worship area | Prevent global folk joke banner during hall occupancy; review before publish |
| Persist private user game data + deletion/export | Journal, quẻ history, XP, opt-in | Offer session-only mode with clearly stated limitations |
| 3-place portal/party travel and camera/photo | Pilgrimage/social photos | Mark API dependent, do not create another login/room system |
| Local audio rights-safe player | Sutra, bell, ambience | External official listening link until cleared local audio available |

## Data/interaction contract (logical, not invented network endpoints)
- Spawn game activity IDs: `soloOracle`, `pairOracle`, `starOffering`, `cutTies`, `folkFunSolo`, `folkFunPair`, `folkFunStars`.
- 7 required anchor IDs for oracles/folk fun are in `data/zones.v1.json`; don't transplant coordinates without checking 3D world.
- `data/activities.v1.json` specifies source pools & phases. All `commandId` draws must be idempotent; no client-provided rarities or action-completed claims.
- `folkFunStars` shares exactly **8** star sockets with `starOffering`, as an optional content skin. 4 original star intentions remain unchanged.
- The two folk quẻ pairs are separate: 12 older `pairLove` outputs and 9 NEW `pairOutcomes`. Both require consent and can be declined.
- No personally identifying or faith-related data used for outcomes; folk-fun symbol matching only among opted-in players, no age/gender/birth date matching.

## Tests needed before calling it built
One real Spawn place boot → real avatar movement/collision; one real activity → authoritative result and restart/retry; two independent real user sessions → both see same duo result, decline/block; 30 clients for map/performance if Spawn supports stress tools. Capture actual console/network/engine trace, screenshots/video and FPS; do not label docs/data-only state as implemented.

## Blocker statuses
`AVAILABLE` = concrete API + observed test. `UNAVAILABLE` = explored and definitively missing. `UNKNOWN/PENDING_SPAWN_API` = not checked. Build only game-side features that have a working dependency. Native Spawn capabilities may be present but remain unverified in this repo until evidence supplied.
