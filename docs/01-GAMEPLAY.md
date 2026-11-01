# 01 — Gameplay / Interactions / Ritual Minigames

## 10-minute happy-path
00:00 entry + avatar -> 00:40 guide -> 01:20 xem chùa -> 02:00 xin quẻ 1 người -> 03:30 chào/chat người khác -> 04:30 kết bạn -> 05:30 xin quẻ đôi -> 07:00 dâng sao -> 08:00 quán trà -> 09:00 ảnh/DM. “Cắt duyên âm” riêng có thể chơi 1–3 phút bất kỳ. Không có timer ép làm hay level kết thúc.

### Controller
WASD/arrows, Shift đi nhanh, mouse right-drag xoay camera, E tương tác gần, F emote, Enter chat khi ở zone cho phép, Esc menu; mobile joystick 112px và camera drag bên phải, action 72px, emote/chat/friend buttons. Speed 2.5m/s walking, 3.6 fast; radius .32m, capsule h1.65m. No jump/combat. Camera third-person behind avatar default distance 4.8m, range 3–7m, FOV 58 degrees; avoid clipping roofs.

### Default base activities
- BOW chắp tay/cúi lễ: 1.4s, anytime appropriate, 2s cooldown.
- INCENSE thắp hương ảo trước chính điện: range 1.6m, 2.1s clip, 15s cooldown.
- BELL đánh chuông: range 1.5m, 1.6s animation, 8s cooldown, quiet audio.
- SIT mats 16 / tea seats 16: 1.6m range, enter 1.1s / exit .8s, server seat lease. No overlapping seat claims.
- TEA: mời người gần ngồi cùng, giới hạn 4 người/bàn, invitation 30s; không có vật phẩm mua.
- WAVE, LOOK_AT_POND, GROUP_PHOTO: wave 1.1s, pond camera opt-in, photo locally rendered with guest permissions.

## ACT-LOVE-SOLO — Bói tình duyên (game)
Where: Z_LOVE, ORACLE_SOLO. NPC Duyên: “Mỗi quẻ là một lời gợi ý, không phải lời tiên đoán.” Player chooses 1 of 3 bài/quẻ sealed icons; animation 2s reveal and server returns uniform random card ID from data/fortune.v1.json category loveSolo. Text 1–2 sentences + social conversation suggestion. Options “Cất vào sổ” (private), “Chia sẻ” (explicit via chat if allowed), “Đóng”. No info collection, no “quẻ xấu”, no pay-to-reroll. 60s cooldown after reveal. Session replay does not reroll same commandId.

## ACT-LOVE-PAIR — Bói tình duyên hai người (co-op)
Where: Z_LOVE, ORACLE_PAIR. Initiator within 2m, invite target within 3m. Target sees name + ACCEPT / DECLINE / BLOCK (30s). Both approach left/right anchors (no teleport), tap READY. Each independently selects 1 of 3 tokens within 20s. When both committed, synchronized red-thread glow 3s and ONE server-selected card from pairLove pool; same result on two screens. Prompts are fun conversation starters, no assertion about soulmate/compatibility science. Afterward “Kết bạn”, “Chụp ảnh đôi”, “Rời đi”; friend only with explicit accept. Cancel when either leaves >8m, declines, disconnects >8s or cancels, release locks, no penalty, no public embarrassment.

## ACT-STAR — Dâng sao giải hạn (symbolic)
Where: Z_FOLK, STAR_PAVILION. NPC Sao intro “Gửi một lời mong ước lên đèn sao”. Player chooses one of 4 wishes: bình an / gia đình / công việc / tình cảm. Align rotating 4-point star to marked outline (2–3 simple taps, keyboard alternative “Tự căn chỉnh”); hold/press light 1.5s, animation lifts lantern 2.2s. Server assigns one of 8 public star sockets, fades 45s; if full private glow still completes, not a blocked/paywalled ritual. Result from matching intention text in fortune data. 60s cooldown. Private chosen wish is not broadcast to other users. No zodiac/birth-year calculation or claim real-world effect.

## ACT-CUT-TIES — Cắt duyên âm (câu chuyện dân gian HƯ CẤU)
Where: Z_FOLK, NPC An. Intro explicitly: “Đây là câu chuyện tương tác mang tính biểu tượng về việc buông điều cũ, không phải nghi lễ thật.” Three phases:
1. SOI_GUONG: choose motif “Điều còn tiếc / Lời chưa nói / Bắt đầu mới” from 3; no personal text input.
2. GO_CHI: rotate three thread rings until open path aligns; each ring has 3 states [0,1,2], win when all==0. Server generates starting states nonzero; max 6 clicks solvable; “Bỏ qua” accessibility alternative, no countdown/failure.
3. THA_DEN: approach stage basin 4m away, interact release paper lantern 3s; reflection card from cutTies pool (8). Story finish flag saves; replay without punish. Friends may ACCEPT to watch, cannot perform spiritual “cutting” on behalf of others; solo must work.
Network validates ordered phases and player proximity. Abort/disconnect -> resume last successful phase for 10 min; later starts from phase 1, completion flag remains.

## Activity state protocol
IDLE -> INVITING (pair only) -> ACCEPTED -> STARTED -> PHASE_1/2/3 -> RESULT -> COMPLETE or CANCELLED/TIMED_OUT. Server owns state and timers. Client sends commandId and choice enum, never final card ID. Retry is idempotent 120s. One stateful activity per player; pressing E twice doesn't start two. Common reason codes: OUT_OF_RANGE, BUSY, DECLINED, INVITE_EXPIRED, TARGET_BLOCKED, INVALID_PHASE, COOLDOWN, ROOM_FULL, DISCONNECTED. UI shows short Vietnamese text, always has cancel/back.

### Interaction priority
Nearest valid 3D anchor within range with clear line of sight, then priority in data/activities.v1.json, then stable ID. Context UI never opens unrelated altar from across world. No forced ritual/social activity; solo and quiet visit remain playable.

### Realistic social pacing
Rituals 25–90s except cut-ties 60–150s; all animations skip-able and no forced lock longer than clip. No click farming, no repeated reward, no karmic XP, no “vận xui” penalties.
