# 10 — Hoạt động đi chùa đầy đủ (OWNER V3 2026-11-01)

Trạng thái: TẤT CẢ BẮT BUỘC TRONG FULL GAME, triển khai từng phase. Đây là phần bổ sung, KHÔNG thay thế bói duyên, dâng sao, cắt duyên âm, chat, kết bạn, quán trà. Những lệnh cũ "không 108 lạy/không progression" đã bị sửa.

## T01 — ĐẾM TRÀNG HẠT (18 / 54 / 108)
At mats/quiet seats press “Lần tràng hạt” -> choose 18/54/108. Scene shows a physical beaded strand and character finger motion; desktop next-bead click/drag + keyboard Space, mobile swipe/tap, accessibility Next button. One discrete valid gesture => exactly +1; debounce 160ms/pointer, never increment every rendered frame or auto-complete. Count e.g. 37/108 + visible bead highlight. State NEW/IN_PROGRESS/PAUSED/COMPLETED, resume after closing panel/reconnect; completion message noncompetitive. Keep privacy: remote others see hand animation but not individual count by default. Use server-validated sequence max 5/s when online; never trust client-provided final count. No XP per bead. Tests: 18/54/108 exact, double tap, 107->pause->108, mobile orientation.

## T02 — LẠY PHẬT VÀ 108 LẠY
Near hall cushion choose 1/9/27/108; avatar plays respectful FULL prostration (~3.0s), counter increments only once on authoritative animation completion, no multi-tap farming. Pause/quit always possible, restart/resume; optional automation of avatar animation ONLY if explicitly chosen, not user physical action. After 27 consecutive bows show gentle optional rest reminder. “Cùng lễ” requires explicit opt-in, participants animate paced approximately together, server syncs group event phase without forcing avatar actions. Others cannot rate spiritual merit. Reduced motion alternative can record symbolic gesture without full animation.

## T03 — NGHE KINH PHẬT THẬT / ĐỌC KINH
Separate genuine Buddhist library from fiction oracle; see docs/11-SUTRA-LIBRARY.md. Card title, canon/source, translator, text/audio rights; Play/Pause/seek/speed/volume and readable transcript/caption for CLEARED_LOCAL audio. Official listening links for recordings lacking redistribution permission. No autoplay/no broadcasting monastery chant to other players. User may privately listen while sitting or exploring. Do NOT invent scripture or label generative advice “kinh”.

### Chế độ “Tụng kinh theo văn bản” (thuộc T03, bắt buộc)
Người chơi chọn một bài kinh THẬT trong thư viện đã xác minh; trang kinh hiển thị nguyên văn bản dịch được cấp phép, chia đoạn đúng nguồn. Có chế độ Tự đọc: bấm Tiếp dòng để đánh dấu đoạn đang đọc, không yêu cầu micro, không tự động ghi âm. Chế độ Tụng theo bản thu: highlight từng đoạn theo timestamp của audio đã được cấp phép; nếu chưa có quyền phát audio, chế độ này ẩn và chỉ có “Nghe tại nguồn” hoặc “Đọc kinh” khi văn bản đã được cấp phép. Người khác KHÔNG nghe giọng người chơi. Có thể cùng ngồi, đồng bộ vị trí dòng trong nhóm theo opt-in mà không chia sẻ tôn giáo cá nhân hoặc số lần tụng. Không chấm điểm niệm/tụng, không AI sửa lời kinh.

## T04 — GÕ MÕ
At dedicated reading/chant corner, tap instrument (Space/click/phone), 1 hit per input, min spacing 200ms, play original/licensed soft wooden hit. Choose free rhythm or 16/32/64 taps with optional tempo guide and silent mode; light ring indicates pulse. Accuracy feedback local/private, not spirituality leaderboard. No sending every beat to server (sparse nearby animation <=1/2s).

## T05 — THIỀN THEO NHỊP THỞ
Choose 1/3/5/10 minutes or free, optional 4s inhale / 6s exhale visual guide (adjustable or off), nature/bell/silent sound, seated animation; pause/leave any time. No medical claims, no streak requirements. Shared meditation invite optional; only opt-in participation count, not judged mind quality. Reduced motion & no-screen-stare mode.

## T06 — HOA ĐĂNG / LỜI NGUYỆN
At pond choose among 3 free colored lotus lanterns and 8 fixed intent categories: Bình an, Gia đình, Tình bạn, Học tập, Công việc, Sức khỏe, Biết ơn, Lời chúc chung. Default template content; optional custom message <=100 graphemes PRIVATE by default. Public text only after manual or approved automated moderation plus review; until operational moderation, public display uses curated templates only. Explicit public consent, report/delete; never reveal personal health/contact data. 2.2s release animation, server-managed drifting instance 24s, 40 visible lantern cap, 15s cooldown, graceful overflow fades oldest.

## T07 — DÂNG HƯƠNG / HOA / NẾN / TRÁI CÂY
Four separate virtual offerings (all free) with original staged animations: incense 2.1s (15s cooldown), flower 2.2s (15s), light 2.2s (20s) glow 30s, fruit 2.4s (30s) visual 45s. Server validates range<=1.6m, prop anchor capacity and expiry; never stacks unbounded and never requires payment. Main hall should be visually respectful, no flashy loot popup.

## T08 — XIN XĂM (separate from love oracle)
At folk garden shake xăm holder by click/drag/screen button for 2–3s, press "Rút xăm". Server chooses 1 of 12 authored reflection slips in data/xam.v1.json, shows xăm number, 1 short couplet/phrase, reflective interpretation, save private/share manually. 60s cooldown, one reveal per commandId, no bad luck and no pay-reroll. UI MUST label “Xin xăm mô phỏng – lời xăm do game biên soạn”, not fake authentic centuries-old verses. Later authentic historic texts only with vetted source.

## T09 — CẦU AN / SỨC KHỎE / GIA ĐẠO
Quiet corner altar, choose Bình an / Sức khỏe / Gia đình / Tình bạn / Tri ân, symbolic bow and optional virtual lamp; private by default; group intent category only if player opts in. Show neutral wish, never healing/medical guarantees. No birthdates or names requested.

## T10 — SỔ HÀNH HƯƠNG
Personal journal tabs: Chùa đã ghé, Hoạt động từng thử, Quẻ riêng, Kinh đã nghe, Ảnh lưu niệm (local unless user saves), Bạn bè. Source truth server receipts, with local fallback only in offline mode. Delete/export guest profile per privacy spec; never expose sacred/prayer data through public profile.

## Shared mechanical invariants
Every action has (actionId, targetAnchor, maxDistance, commandId, authoritative state/cooldown, animation, failure message). Client cannot invent counts, points, prayer output, friend participants, public wish text or completion. State must survive orientation change; disconnect produces explicit status. Support optional audio mute, skip cinematic, keyboard/mobile controls and reduced motion. Genuine audio/text require rights review.
