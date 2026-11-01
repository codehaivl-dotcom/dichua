# 03 — Social design, multiplayer, friendships

**Required playable feature set, not just future aspirations.**

## Guest identity & persistence
Entry without form; server mints opaque guest ID and generated public alias Khách + 4 alphanumerics, stores HttpOnly Secure SameSite cookie for 30 days on opt-in/appropriate notice. User picks from 4 avatars. Server has minimal guest DB record, no phone, birthday, face image or real identity. Unlinked guest friends available on same browser; show honest warning that clearing device storage can make the account unrecoverable. Optional proper cross-device email OTP sign-in is post-MVP. “Create account” must not block play.

## Player interactions
Tap/click on avatar (within <= 6m) -> context card with alias, status and menu: Chào, Chat gần, Mời uống trà, Mời xin quẻ đôi, Kết bạn / Chấp nhận, Chặn, Báo cáo. No forced follow, unsolicited physical contact or romance label. In-world emotes wave/bow/soft clap/point, cooldown 2s. Gender / marital assumptions forbidden.

## Proximity chat
Only near players within 16m in same chat-permitted zone. Chat bubble fades after 6s. Max 160 grapheme characters, <=1 message/2s, <=10/min, no clickable links/HTML/markdown. Server normalizes Unicode, rejects harmful content/URLs and spam; text rendered safely as textContent. Public chat disabled inside Z_HALL with quiet-zone hint; no bubble over ritual shrine. Block/mute on either side suppresses delivery. “Ẩn chat” is prominent. No global public chat in MVP.

## Friendship state
NONE -> REQUESTED -> ACCEPTED or DECLINED or EXPIRED; either side can BLOCK or REMOVE. Request accepted by recipient only; 7-day expiration; 10 requests/day/guest, max 3/min. Store pair keys in canonical sorted order; uniqueness avoids double friend rows. Invite notice shows alias + action, not private precise location. Accepted friends show “Đang online / Vắng mặt”; button to join their room only if online, not blocked and capacity permits. If full -> explanatory message, never displace player. Friend request does not automatically create romantic match.

## DMs
1:1 text only with mutual accepted friendship. Limit 500 grapheme chars, <=20 messages/min, 30-day retention; no images/files/URLs, no auto-notifying external platforms. Store sending and recipient guest IDs, timestamps, moderation flags. Report/block accessible next to each message. If blocked, no new delivery; old messages are hidden in UI (deletion policy in doc 07). No typing indicator or read receipts in MVP.

## Shared activities
Pair love oracle: request -> target accept -> both near two altar anchors -> both READY and choose -> server reveals SAME card -> exit/photo/friend. No acceptance = no start. 30s invite timeout. Walk >8m from altar, room leave or disconnect grace >8s cancels both. Tea invites up to 3 people per 4-seat table; seat held by server with 25s reservation then released. Photo: invite up to 3 nearby people; each opts into group pose, camera captures locally; remote player can disable capture representation in settings. Every invitation can be declined silently.

## Multiplayer room model
One authoritative world instance per room, initial max 30 authenticated guest sessions; max configurable 50 only after performance proof. Server 20Hz simulation, 10Hz snapshot, client input <=20Hz. Interest radius 35m+8m hysteresis. Client interpolate remote avatars 120ms; local prediction reconciles with server state. Dynamic world state seats, altars, active stars, pair activities on server only. Real player count = active server room members, never NPC or estimated. Disconnect after 8s grace releases seat/invite, reconnect with same session before grace resumes. Multiple tabs => only most recently connected tab controls; older socket rejected with reason.

## Anti-harassment
Block/report/mute required BEFORE public chat launch. Server enforces blocked pair isolation for chat, invites, friend requests, DM and join-friend. Report options Quấy rối/Spam/Giả mạo/Ngôn từ thù ghét/Khác. Data minimization, small staff review queue and ban escalation. No player-created rooms/links or uploaded images in MVP. Adult target 18+ self-attestation (not foolproof identity proof), and moderation ready before production.

## Test flows
Two browser contexts: enter, see each other, wave, chat in courtyard, try chat in hall (rejected), friend request+accept, DM, invite pair activity, receive same card, depart, rejoin friend; test decline/block/timeout/duplicate/room full. NPC cannot satisfy multiplayer acceptance. Verify message not delivered beyond 16m or to a blocked account. Verify no fake counter.
