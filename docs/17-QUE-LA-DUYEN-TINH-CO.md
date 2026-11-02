# 17 — HỘI QUẺ LẠ & DUYÊN TÌNH CỜ (AUDITED V4, 2026-11-02)

**Status:** Content/spec/data and validation script exist. **NO GAMEPLAY CODE OR SPAWN RUNTIME TEST HAS BEEN COMPLETED HERE.** This is a small optional side activity inside **Đi Chùa Online – Cầu An · Duyên Lành**, not the main game and not an actual Buddhist ceremony.

## Product concept
A player may get an everyday-comedy “quẻ” about friendship, luck, delay, ông Tơ's GPS, missed chat messages or deadline. Some cards are rare and voluntarily shareable. A few cards unlock playful 20–45-second side interactions. A consenting friend can join a duo “same frequency” quẻ, causing a memorable game moment. Real worship, sutra listening, bowing, mala and meditation remain dignified and entirely independent.

**Zone:** `Z_FOLK` social folk pavilion; no joke popups/audio inside `Z_HALL`. Fictitious folk fun is labelled clearly: “Minigame dân gian hư cấu, để giải trí; không dự đoán số phận”. No curse/fate/illness promises, no paid reroll or roulette with real financial rewards.

## 1. Exact gameplay IDs, sources and anchor separation

| Game | Activity ID | Spawn anchor | Data source | Expected |
|---|---|---|---|---|
| Existing solo love oracle | `soloOracle` | `ORACLE_SOLO` | `data/fortune.v1.json:loveSolo` | 12 originals |
| Existing duo love oracle | `pairOracle` | `ORACLE_PAIR` | `data/fortune.v1.json:pairLove` | 12 originals |
| **New** folk fun solo | `folkFunSolo` | `FUN_ORACLE_SOLO` | `data/folk-fun.v1.json:cards` | 32 authored funny quẻ |
| **New** folk fun duo | `folkFunPair` | `FUN_ORACLE_PAIR` | `data/folk-fun.v1.json:pairOutcomes` | 9 ordered results |
| Existing star offering | `starOffering` | `STAR_PAVILION` | `data/fortune.v1.json:stars` | 4 intentions / **8 sockets** |
| **New** comedy star mode | `folkFunStars` | `STAR_PAVILION` (SHARED) | `data/folk-fun.v1.json:stars` | 8 fictional captions |

**Important:** `folkFunStars` is ONLY an optional **mode selected from the existing STAR_PAVILION interaction**, not a second interactable that automatically wins E interaction priority. It reuses the **same eight** star sockets, never creates extra physical stars. The original four intentions still work.

Proposed coordinates in `data/zones.v1.json` for `FUN_ORACLE_SOLO`, `FUN_ORACLE_PAIR`, and `FUN_GATHERING` are map-design seeds, marked `PROPOSED_CONFIRM_IN_SPAWN_WORLD`; they are not evidence of actual built Spawn anchors. NPC_LANH is the tea vendor in Z_TEA.

## 2. Gieo Quẻ Lạ — main loop
At FUN_ORACLE_SOLO, the player chooses 1 of 3 authored wooden/paper envelopes, watches a 2.2-second animation, and receives a **game-authoritative** card. Tier probability: **THƯỜNG 72%, VUI 22%, HIẾM 5%, HUYỀN THOẠI 1%**. Uniform draw from the card pool of that tier: 16 / 8 / 6 / 2 entries, 32 total.

State: `IDLE -> DRAWING -> REVEAL -> PRIVATE_RESULT -> OPTIONAL_MICRO_OR_SKIP -> FINISH`. Player receives a `title`, humorous `line`, and `reaction`. No actual real-life prediction. The user can **Cất riêng / Khoe (only if permitted) / Thử trò phụ (optional, if assigned) / Đóng**. Completing the quẻ never requires chat or another player.

Result authority: use an actually supported authoritative Spawn game action or receipt API; `(SpawnPlayerId, commandId)` must be replay-safe with 60-second draw cooldown, so disconnect or UI reopen cannot reroll. **If no confirmed trusted state API, mark this dependent runtime mechanic PENDING_SPAWN_API, not implemented.**

Examples: rare “Duyên Đi Đường Vòng” — “Ông Tơ không đi lạc, chỉ đang tìm chỗ gửi xe.” Legendary “Đào Hoa Nở Muộn” — “Duyên chưa tới không phải do ế; GPS của ông Tơ đang cập nhật bản đồ.” These are fiction by the game writer, not Buddhist text.

## 3. Six short *real interactive* micro-games, not just text
All six are specified under `microGames` in `data/folk-fun.v1.json`: input, timing, win condition, gentle failure, optionality, and mapped source cards. **Any player can also start any micro-game directly from the Folk Board** (no gambling/repeated draw to access it, direct-play cooldown 60s). Card reveal may highlight the matching micro-game. Outcomes are humorous postcard/animation only, not spiritual rewards or public rankings.

| ID | Game action | Time |
|---|---|---|
| `M01_FIND_SANDALS` | Spot the matching pair of sandals in a six-option visual/3-prop puzzle; pick two matching IDs | 40s |
| `M02_TEA_ORDER` | Select the three tea preparation steps in correct order | 35s |
| `M03_ONG_TO_GPS` | Rotate three arrows to connect the route of an absurd ông Tơ delivery | 45s |
| `M04_ECHO_CHIME` | Listen to four tones from a small folk wooden chime and repeat four beats | 30s |
| `M05_LOTUS_MEMORY` | Watch three lotus lights then tap their sequence | 30s |
| `M06_BUDDY_TEA` | Optional two-player tea coordination; both explicitly accept; solo no-penalty fallback | 45s |

Pause/skip/timeout gracefully restores third-person control and cancels session state. A wrong answer cannot alter real “sao hạn”, nor create bad fortune. M04 is a **folk toy outside the main hall**, not scorekeeping on a real ritual bell.

## 4. Nearby “Quẻ Hợp Tần Số” — choose icon ONCE
At FUN_GATHERING, a person intentionally enables `Tìm bạn cùng tần số`, **OFF by default and auto expires in 5 minutes**. They choose **SEN / CHUONG / TRA once**. The same icon is reused for both **candidate suggestions** and **final `folkFunPair` outcome** — no second selection at pair altar, avoiding previous spec ambiguity.

Eligibility: genuinely online Spawn players in the **same room/place** and within **16m**, also opted in, not in Z_HALL, not AFK/in ritual, not blocked. Sort first by icon similarity then randomized tie-break with game-safe state; return **0–3 private suggestions**. If no candidates, use existing joke copy about ông Tơ checking Wi-Fi, not fake an NPC person. No matching by personal name, birthday, marital status, age, gender, appearance, religion, messages or private worship.

A uses an EXISTING Spawn invite mechanism; B sees the inviter's **Spawn name** and can Accept / Decline / Block. Timeout 30s; at most 3 invites/minute. On mutual consent, players stand at the `FUN_ORACLE_PAIR` pads, use previously selected symbols as their committed choices, and see one of nine prewritten **ordered** results. A=inviter, B=invitee. Deny, disconnect, block or moving too far aborts shared result; never make a public marriage/romance label. Optional subsequent friend request/photo require independent mutual consent.

If Spawn offers no privacy-safe nearby query or block-aware selection contract, **disable suggestions**. Do NOT implement a second friend/DM system. Use proven Spawn party/manual invite fallback only when user protections are intact.

## 5. Rare result and “Global” share
Only **HIẾM / HUYỀN THOẠI** offers `Khoe cả server`. Show exact preview and demand separate Confirm; use the consenting owner's Spawn displayName, title, prewritten line. Never reveal names of B/C or a “you two are destined” claim. No auto announcement.

Caps: `1 per user / 24h`, `1 per server / 5min`, dedup by authoritative game receipt. The scope of "server" (place instance vs whole platform) requires actual Spawn API documentation. **Broadcast/quiet-zone filtering must be verified before activation.** With missing APIs, allow only legitimate existing Spawn room/friend/private share when supported, otherwise just Save Card. Z_HALL must not receive comedy overlays or noise; fail closed if filtering can't be guaranteed.

## 6. Eight fictional stars, NOT actual predictions
The optional `folkFunStars` skin maps eight authored humorous captions to the eight existing star slots, by index and its actual runtime socket ID. The four original wish intentions remain; no new astronomy/horoscope, 12-socket assets, “real giải hạn”, blood type or birthdate. User chooses the funny-skin mode explicitly. Original `starOffering` interaction remains the default.

## 7. Implementation ownership and acceptance
Spawn owns login/display name, scene/network, party/friends, chat/DM/block/report, loading/menu and moderation features. Chùa owns activities, assets and authored data. **Do not scaffold TS/Fastify/PostgreSQL/own socket server.** Confirm engine API signatures before coding conditional gameplay. Use `docs/06-TECH.md` capability matrix, `data/activities.v1.json`, and `data/zones.v1.json`.

Acceptance **FUN-01..FUN-10** listed in `docs/08-QA.md`. Script `node scripts/validate-folk-fun.mjs` validates only JSON structural contracts. Real playable tests require 2 independent Spawn users, interaction animation, opt-in expiry, false-result replays, block/timeout/quiet hall, mobile, and full event delivery proof. No screenshot-only PASS.

**Suggested build order:** (1) single player `folkFunSolo` 32 draws and one small micro-game; (2) all six short micro-games; (3) genuine two-player pair, 5min privacy-safe opt-in; (4) Global if and only if Spawn announcement API is verified. This is an optional feature and must not block core temple practices.
