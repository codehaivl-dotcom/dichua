> **OWNER V3 EXPANSION (2026-11-01):** New required features supersede any conflicting older MVP exclusion. See docs/10–14 and AGENTS.md. Sections below are retained as baseline for initial social/folklore phase, not the entire full-game scope.

# 06 — Technical architecture, protocol, persistence and failure modes

## Recommended stack
Monorepo TypeScript strict / pnpm / Vite / Three.js (GLB, KTX2), small accessible DOM UI; Node.js 22 + Fastify + ws (WebSocket); Zod shared runtime schemas; PostgreSQL production + SQLite dev adapter if tested equivalent; Vitest + Playwright E2E + scripted WS load. Use existing compatible Player Platform from Phố Có Hẹn only if available, permitted and adapter tests demonstrate same runtime/source works on both MangoLocal and Spawn Live. No imaginary dependency. If not available, build standalone functional backend in this repo and document compatibility boundary.

Suggested paths: apps/client/src/{scene,camera,avatar,controls,ui,activities,social,network,audio}; apps/server/src/{auth,rooms,simulation,actions,friends,chat,persistence,moderation}; packages/shared/src/{protocol,schemas,content,types}; data/*.json; tests/{unit,e2e,load}; scripts/profile; .github/workflows/ci.yml.

## Network
20 Hz authoritative server, client input <=20 Hz seq+normalized input (not client world coordinates), 10 Hz snapshots of nearby avatars + global activity state. AOI 35m +8m hysteresis. Server clamps speed/collision/active action, seat claims and same-user dual-tab control; client interpolates remote 120ms and reconciles own movement. Connection after transient failure backoff .5/1/2/4/8s with jitter max 5, grace 8s, release leased seats and pending invites. Persistent friend data survives world server restart; active instances don't. No fake local player objects presented as real online in disconnected mode.

## Protocol v1
C->S HELLO {version,build}; JOIN {avatarPreset}; INPUT {seq,axes:[x,z],yawDelta,fastWalk}; INTERACT {commandId,actionId,targetId,choice?}; SOCIAL {commandId,op,targetGuestId,payload?}; CHAT {commandId,channel,recipientId?,text}; LEAVE; PING.
S->C WELCOME {guest,roomId,serverTick}; ROOM_STATE {players,seatState,starState,roomCount}; SNAPSHOT {tick,ackSeq,entities}; ACTION_RESULT {commandId,accepted,code,payload?}; SOCIAL_EVENT; CHAT_EVENT; ERROR {code}; PONG.
Each message contains discriminator + schemaVersion=1. Shared Zod runtime parse server and client. Max chat length by grapheme; max WS frame <=128KiB, normal command <=8KiB, snapshot <=64KiB. Rate limits input 30/s, actions 6/s, friend req 3/min and 10/day, nearby chat 10/min, DM 20/min. dedup (guestId,commandId) 2 min. Never accept client-provided random fortuneId.

## Canonical server state
Room: roomId, joinedPlayerIds, chatZone, seats (free/reserved/occupied), activeStars (8 sockets + expireAt), pairSessions, photoInvites, tea tables, tick.
Player: guestId, publicAlias, avatarPreset, pos/yaw/motion, currentZone, activityState, action cooldowns, connected, lastSeq, privacyPrefs.
Friend: guestA,guestB,status,requesterId,createdAt,expiresAt,updatedAt.
Message: id,sender,recipient,text,createdAt,expiresAt(30d),reportRef? — mutual only.
Journal: guestId, resultCardId, activity, createdAt — last 20 (private).
Report: id,reporter,target,category,serverEventRefs,createdAt,reviewStatus. IP/security logging minimal separate with retention according to policy.

## Atomic operations
Friend request uniqueness per sorted pair, accept only recipient; block overrides request/invite/message. Pair session exactly two participants with both ACCEPT and READY, one server random card, same result for both, exactly-once journal write per player. Seat reservation first valid server arrival wins; disconnect grace expiry frees seat. Stars choose first free socket 45s, slot full doesn't block private completion.

## Database and HTTP
HTTP GET /healthz,/readyz,/api/config,/api/privacy; POST /api/guest (create or recover cookie); POST /api/delete-guest (delete identity, friendships/messages according to policy); GET /api/me (same-origin auth); WebSocket /ws. HTTP mutating endpoints require CSRF protection (Origin/CSRF token), WebSocket checks Origin. No password in MVP. DB migrations transactional; test delete/rejoin and retention cleanup. Never store raw third-party personal data from ritual fields (there are none).

## Performance
Budget targets from doc 02, lazy GLB loading + instancing, render loop independent of network tick, remote avatar LOD, quality presets, throttled hidden tab, dispose GPU resources/listeners on leave and rejoin. Measure FPS/render calls/GPU memory/WS bytes, not just unit tests.

## Deployment
Static frontend CDN plus Node API/ws behind same-origin HTTPS proxy; staging and production env, server metrics health probes, secure cookies, DB backups, automated DB migrations, ws upgrade configured. Secrets env only; logs redact chat text and identifiers where possible. Do not claim prod-ready without deployment and live two-client test.


### V3 runtime/authority
Room key includes mapId, instanceId; 3 map scene transfer must be transactional with rollback and same identity/friends. Add practice controllers server-validated for mala 18/54/108, bow 1/9/27/108, lanterns cap40, four offering cooldowns, 12 xăm slip server draw, private wishes, event scheduler Asia/Ho_Chi_Minh, XP idempotent receipts and optional friend ranking. Loaded sutra audio assets must be legally cleared and SHA256 indexed; external official recordings are linked, not illegally proxied. Shared schemas for new data/*.json; load 30 clients per room and test map travel/reconnect.
