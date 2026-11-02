# 03 — Spawn-native social game contract (OWNER V4, 2026-11-02)

**Current production direction: reuse the Spawn player platform. Do not build an auth/chat/DM/friend/mute/block/report/network stack or generate Khách xxxx IDs.** This document supersedes the standalone social architecture in older specs. Capability details still require evidence from the actual Spawn runtime; do NOT invent endpoints.

## Ownership
- Spawn supplies account, displayName, appearance/wardrobe base, join/leave, existing chat/DM, mutual friends, party, block/report/mute, default menu, graphics/loading interface. Game never renames a player or asks for a separate login or 18+ gate.
- Chùa game supplies map places, quiet-zone configuration, 16m nearby chat policy (via actual Spawn-supported method), interaction anchors, activity invitations, scripted results, private game journal and consent/preferences for folklore participation.
- 3 chùa = 3 Spawn places; travel by place portal, friend join by available Spawn party/join APIs, not homegrown rooms or cookie auth. Initial target room population 30, actual platform caps/perf require verification.

## User flow
Spawn places character by tam quan with their Spawn name. Optional outfit cabinet at gate. Player walks, worships, reads/listens to real sutras with cleared rights, may join events. Optional social area permits chat and invited 2-person minigames. Never force chatting or dating to complete temple practices.

## Social safeguards
- Nearby text chat ideally 16m outdoors; chat bubbles and proximity controlled by supported Spawn feature. Z_HALL is a quiet space; chat/folk jokes/announcement effects suppressed there. If engine lacks zone suppression, this is a product blocker to resolve, not a reason to build another chat UI or silently allow loud notifications.
- Reuse Spawn's mutual friend request, DM, decline, block/report/mute semantics; blocking MUST prevent invitations and shared result access. If Spawn cannot expose block state to game logic, do not enable nearby match suggestions until protected.
- Pair invitations: player A chooses a visible, opted-in real player B; B explicitly accepts or declines within 30s, can block, both enter pads. No auto friendship, no auto romance, no fake NPC counted as human.
- Consent to public friend/party photo by existing Spawn capability when available; screenshot save/export requires API inspection. Never automatically upload images.

## Folk-fun privacy overlay (docs/17)
- FUN_GATHERING opt-in default OFF. 5 minute automatic timeout. Choose one symbol SEN/CHUONG/TRA ONCE at opt-in, reused in `folkFunPair` result; no double-choice UI.
- Eligible players: same Spawn room/place, <=16m, not in Z_HALL, not busy/AFK, not blocked, both opted in. Private shortlist 0–3; only A sees names when the exposed Spawn API grants this. Invitations via Spawn existing system; 3/min max. No B/C name in Global.
- Rare quẻ share is never automatic. After explicit preview+confirmation, use supported Spawn announcement API only with verified rate limit, 24h/user and 5min/server. Otherwise support private or room share only if Spawn supports it and is quiet-zone safe. UNKNOWN = PENDING_SPAWN_API, not shipped.

## Acceptance
Two genuine Spawn player sessions, not mocked NPCs: nearby 16m vs beyond; quiet hall; block suppresses messages/invites; mutual friend accepts/rejects; duo accept/decline/leave/disconnect; 5-min opt-in expiry; no global side effect without confirmation. Verify API contracts with actual code, permission constraints and tests before marking DONE.
