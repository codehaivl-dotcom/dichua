# 09 — Spawn-native delivery plan (Owner V4 — 2026-11-02)

The previous stand-alone server/DB build path is superseded. Deliver content and activity controllers **inside Spawn**; use platform existing rendering, player identity, party/network, friends/chat/DM, report, menus/loading.

## Phase 0 — Actual Spawn capabilities, not architecture guess
Inspect runtime/API and record proof: world editing, model import/rigging, existing identity, gameplay state authority and deterministic receipts, minigame interactions, nearby block-aware lookups, quiet-zone UI, announcement, 3-place travel, private storage, local audio rights, photo export. `UNKNOWN` is not DONE. Integrate already existing base before speculative add-ons.

## Phase 1 — Playable Chùa Sen vertical slice
Third-person avatar with existing Spawn name -> tam quan -> courtyard -> main hall -> 1 mat and 1 actual ritual animation (9 bows or 18 mala) -> safe exit -> another interactive object. No duplicated Spawn menu/login/chat. Verify on two browser sessions where multiplayer is expected.

## Phase 2 — World social compatibility
Hook Spawn chat range/quiet zone, friends party join, block/report/mute semantics. Test 2 actual Spawn sessions and same room identity. Do not write WS server or guest account database.

## Phase 3 — Authentic core + original folk interactions
Complete temple rituals according to docs/10 + older solo/duo oracle, 8-star system, fictional cut ties, team/photo/tea. Maintain source separation for 12 old solo and 12 old pair cards.

## Phase 4 — Folk fun extension (docs/17)
`folkFunSolo` separate anchor + 32 weighted scripted quẻ, then 6 SHORT optional micro-games from JSON; `folkFunPair` separate anchor with 9 results and no double icon selection; opt-in nearby candidate query only after Spawn capability verification. Global rare share last, only if rate-limit+quiet hall verified. If missing, fallback to safe private/Spawn friend share; mark unresolved as PENDING.

## Phase 5 — Content and final art
Vietnamese-style Chùa Sen architecture + approved modest outfit 4 presets, animations lạy/mala/chime/tea/duo, soft sounds, 30-player performance, mobile layout, safe moderation. Three real places Chùa Sen, Trúc, Mây, pilgrimage events and optional game XP as specified in docs/12.

## Phase 6 — Real sutras and full acceptance
Five authentic scripture source cards, official external links and at least 2 rights-cleared playable Vietnamese tracks for full-feature release; private/journal/delete behavior tested. Build real Spawn QA evidence for E01–E30 + FUN-01–FUN-10, zero release-blocking safety/privacy failures.

## Required tools/tests
Engine dev overlay: FPS, drawcalls, collision and real player count; 2 genuine Spawn accounts test matrix; replay same commandId; opt-in eligibility/expiration; 8 star slots; 3-place portal; 30 concurrent players where possible; phone and desktop footage. No fake runtime, invented APIs, fake player count. Each delivery note includes IMPLEMENTED / TESTED / FAILED / PENDING_SPAWN_API / NEXT. Code the minimal playable slice, do not replace actual work with repeated audit documents.
