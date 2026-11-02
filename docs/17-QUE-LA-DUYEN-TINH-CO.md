
# 17 — HỘI QUẺ LẠ & DUYÊN TÌNH CỜ (Owner addition 2026-11-02)

**Scope:** Add-on mini-game module for Đi Chùa Online – Cầu An · Duyên Lành. **Spec + authored data only; NOT IMPLEMENTED.** Core temple worship, reading real Buddhist sutras, old 36 oracle cards, traditional-style xăm and 8 star sockets remain unchanged. No new login/chat/DM/friends service: reuse existing Spawn APIs.

## Intent
The game should have the weird, curious, hilarious, highly shareable surprises that other online temple games lack. The Vietnamese flavor is gentle irreverence about everyday life (ông Tơ lạc GPS, thả thính, deadline, trà, tìm dép...), **never ridicule actual Buddhism or participants**. Fictional folk-divination / fun activity lives in Z_LOVE or Z_FOLK. The authentic central hall Z_HALL stays solemn.

## Mini-game A: Gieo Quẻ Lạ (32 authored cards)
At the existing ORACLE_SOLO anchor, player chooses 1 of 3 envelopes, spins/shakes for 2.2 seconds; game authority selects tier with explicit weights **THUONG 72%, VUI 22%, HIEM 5%, HUYEN_THOAI 1%** and then a card uniformly within tier. Display title, funny prophecy, friendly conversation/quest prompt. Save privately or optionally share; no auto-share, no money, no paid rerolls, no prediction based on personal data. A nice/rare card is a game rarity only, not spiritual privilege. 60-second cooldown; idempotent result from commandId. Data: folk-fun.v1.json.

Example rare: “Duyên Đi Đường Vòng”: “Ông Tơ không đi lạc, chỉ đang tìm chỗ gửi xe.”
Example legendary: “Đào Hoa Nở Muộn”: “Duyên chưa tới không phải do ế; GPS của ông Tơ đang cập nhật bản đồ.”

## Mini-game B: Khoe Quẻ Đẹp / optional Global
For HIEM and HUYEN_THOAI only, show “Khoe cả server” with PREVIEW and explicit second confirmation. Announce a prewritten template: “✨ [Spawn display name of consenting A] vừa trúng quẻ [title]! [line].” **Never name B/C and never reveal inferred compatibility in global.** Only the player's approved Spawn displayName is used. User opt-in OFF by default. Cap: **1 global share per player in 24 hours**, **1 total announcement per server in 5 minutes**; dedupe by receipt. If Spawn has no supported global broadcast API, degrade to its room-level or friend-share mechanism and label PENDING_SPAWN_API. Never create a second chat system.

In/near Z_HALL no popups, loud joke audio or spam; if Spawn cannot suppress by zone, block global UI in hall and review before ship.

## Mini-game C: Quẻ Hợp Tần Số (opt-in nearby suggestion)
After drawing, player can choose “Tìm người cùng tần số”. Each voluntarily picks SEN / CHUONG / TRA, and explicitly opts into candidacy for **5 minutes** (OFF default, can stop immediately). Only genuine other players **within 16m, same active Spawn room/place, eligible & also opted in, not blocked, not AFK or occupied in another ritual, not in Z_HALL** may appear as **up to 3 PRIVATE suggestions**. Prefer matching symbol; otherwise use game-only random tie-break. DO NOT calculate from real gender, age, nickname, avatar, birthday, chat, religion or any private data.

A can invite B using existing Spawn invites. B sees A's identity and **Accept / Decline / Block**; reject/timeout within 30s ends the attempt. When both consent and stand at existing ORACLE_PAIR two pads, each independently chooses 1 of 3 symbols; shared result uses **exactly 9 prewritten 3×3 pair outcome texts** from data. Results are playful compatibility *between chosen symbols*, NOT objective fate or relationship judgement. Optional photo only after both agree. Friend request runs through Spawn and needs consent. No publicly announcing “A hợp B” unless both themselves opt to share privately using existing social.

If zero candidates: “Ông Tơ đang kiểm tra sóng Wi-Fi; chưa có ai bật thử quẻ quanh đây.” No fake NPC/bots. Restrict invitations <=3/min; block/mute override. Don't persist match predictions or candidate rosters.

## Mini-game D: Tám Sao Lầy (content skin on old ACT-STAR)
Preserve **8 physical star sockets**, 4 prior real-world intention categories, existing star ritual action. Overlay optional 8 FICTIONAL lighthearted star results from data (Sao Deadline, Sao Tin Nhắn, Sao Ông Tơ Đường Vòng...). No real natal horoscope, bad-fate warnings, medical cures, ghost diagnosis, or official Buddhist ritual claims. Do not replace existing star offering mechanic or move the comedy into main hall.

## Art/interaction
Wooden paper-fortune wheel or draw box; 3 appealing envelope meshes; 4 rarity reveal treatments; no casino roulette/wagering visual grammar, no real-currency rewards. A rare reveal can glow 1.5–2s; avoid flashing for reduced motion. Ensure 2-browser test in real Spawn before claiming multiplayer. Real 3D temple art, not a separate mobile app or chatroom.

## Spawn integration and fallback
- Spawn is owner of auth/display name, rooms, friends, party, block/report/mute, message delivery, moderation. Do not implement duplicate systems or anonymous “Khách xxxx”.
- Check whether Spawn offers: (1) server-authoritative RNG/game state, (2) opt-in player-nearby query with block status, (3) inviter/consent flow, (4) global announcements with rate limits and hall suppression. Unknown APIs => **PENDING_SPAWN_API**, not DONE.
- Compatible anchors: ORACLE_SOLO, ORACLE_PAIR, STAR_PAVILION, zones Z_LOVE/Z_FOLK. Agent must map to actual built world anchors, not blindly assume legacy coords are still correct.
- Preserve 16m chat radius, 30-player initial room cap, game context ratings/safety inherited from Spawn. If any Spawn-age protections restrict romantic interactions, obey them; no separate 18+ gate here.

## Ethics and cultural rule
Text is **GAME_AUTHORED_FICTION**, not Buddhist doctrine or actual predictive fortune. No gambling, pay-to-reroll, fabricated “vong”, paying to avert misfortune, birthday-based romance predictions, unconsented names, public embarrassing tags, or claims of guaranteed blessings.

## Acceptance gate
FUN-01 JSON has 32 unique cards distributed 16/8/6/2 and tier weights sum 100; all strings Vietnamese authored and no placeholders.
FUN-02 100k simulated draws approximately match tier weights, server source of truth; replay commandId same result, 60s cooldown.
FUN-03 No automatic global; only rare+legendary, with preview and explicit share, 24h/5m caps, no other names.
FUN-04 Candidate roster OFF by default, expires at 5m, block/AFK/zone filters and 16m eligibility enforced using Spawn; no B/C name in global.
FUN-05 Two real browsers, each selects 1 of SEN/CHUONG/TRA, 9 correct shared outcomes; no reveal when declined.
FUN-06 Eight fun-star overlays and exactly eight sockets; original intent choices retained.
FUN-07 Regular temple hall unaffected; no religious mockery or public shaming; sober by default.
FUN-08 Responsive phone/desktop, rare animation skip/reduced-motion, no network mock counted as success.
FUN-09 Spawn API dependency validated; unsupported features marked PENDING not fabricated.
FUN-10 This expansion is optional, does NOT block temple worship and does NOT make romance the main story.

**Implementation order:** first solo Quẻ Lạ, then real two-player Quẻ Hợp Tần Số, lastly Global/room announcement after proving Spawn APIs. Keep this one small module, not a new standalone game or 60 new tasks.
