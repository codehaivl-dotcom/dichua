> **OWNER V3 EXPANSION (2026-11-01):** New required features supersede any conflicting older MVP exclusion. See docs/10–14 and AGENTS.md. Sections below are retained as baseline for initial social/folklore phase, not the entire full-game scope.

# 05 — NPC, stories, authored fortune content

All content written and localized; **no runtime AI predictions or unconstrained dialogue**.

## Named NPC
NPC_THIEN (gate): welcome guide: “Hôm nay bạn muốn đi lễ, xin quẻ hay gặp gỡ mọi người?” choices Đi lễ / Xin quẻ / Gặp gỡ / Tự khám phá. Each choice temporarily highlights relevant destination on mini-map. No forced quest.
NPC_DUYEN (love garden): “Mỗi quẻ chỉ là lời gợi ý để bạn nghĩ về lòng mình.” Choices Xin một mình / Xin cùng bạn / Để sau. Opens appropriate gameplay only in range.
NPC_SAO (folk pavilion): “Thắp một vì sao cho điều bạn đang mong.” Four intents Bình an/Gia đình/Công việc/Tình cảm, no birth date input.
NPC_AN (folk garden): “Đây là chuyện dân gian về buông những điều cũ, không phải nghi lễ thật.” Choices Bắt đầu / Nghe giải thích / Để sau.
NPC_LANH (tea stall): “Ngồi uống trà một lát nhé?” A scripted ambience vendor with tea seat menu; does not simulate human friendships.

## Optional onboarding chain (each skip-able, no XP)
T01 Đi dạo: player moves >=8m; “Bạn đã biết di chuyển”.
T02 Làm một hoạt động: solo quẻ OR star OR bow; “Bạn đã thử một trải nghiệm”.
T03 Chào một người: wave to real player, OR greet Thiện if room empty; “Bạn đã biết chào”.
T04 Tìm điểm hẹn: visit Z_TEA; “Bạn có thể rủ một người bạn ngồi cùng”.
All zones and features open without completing tutorials.

## Card pools
Exact safe authored cards defined in data/fortune.v1.json:
- loveSolo: 12 unique positive/neutral reflections + 12 social prompts.
- pairLove: 12 shared prompts; must NOT claim 2 players destined to love or reveal private inference.
- stars: 4 intentions each with 1 authored result; no bad-star calculation.
- cutTies: 8 reflective lines about letting go; no assertion a ghost attaches to someone.
All cards carry IDs, exact VN copy, contentVersion=1. Server picks uniform random relevant pool after activity complete; client only renders returned known ID. Invalid/missing pool => disable activity with clear error, NOT substitute fabricated card.

## NPC animation and timing
Idle 3–6s loop; look at facing player; talk gestures <=1.6s no voice; dialog next line on user click not autonomous. Conversation can be interrupted by moving away >3m. NPC sign labels “Nhân vật trong game”. Avatar movement/collision independent of NPC idle.

## Dialogue safety
No diagnosis of vong, ma ám, vận xui. No pronouncements “sao xấu đã được giải”, “người này là định mệnh của bạn”, “buộc duyên”, “trừ tà hiệu nghiệm”; no moral pressure, money, divine blessing guarantees. Do not claim folk ritual is ordinary formal Buddhist liturgy. No forcing flirtation, sexual content or profile-based relationship predictions.

## Social icebreakers (prewritten, optional)
“Một nơi bạn muốn ghé thăm?”, “Bạn thích trà nóng hay trà đá?”, “Một điều nhỏ khiến bạn vui hôm nay?”, “Bạn thích buổi sáng hay buổi tối?”, “Bạn thích đi một mình hay cùng bạn bè?”.
Allow only sharing text prompts with manual consent; do not auto-post a ritual result to others.

## Expandable writing pipeline
Content should be identified by stable ID/version. Future authored seasonal stories require editorial review and cultural review before deployment; no automatic AI generative “quẻ” content.


### V3 content separation
The original love oracle and star/cut-ties content remains entertainment, **not scripture**. Add twelve authored game-simulation xăm slips at data/xam.v1.json with origin disclaimer, five actual canonical scripture source entries at data/sutras.v1.json (text/audio rights separately checked), and prewritten/moderated lotus wishes. TTS may only recite verified licensed scripture verbatim; no AI-written words presented as Buddha's.
