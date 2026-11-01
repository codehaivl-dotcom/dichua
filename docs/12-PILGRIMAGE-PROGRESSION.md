# 12 — Hành hương, sự kiện tập thể, điểm/level/xếp hạng

**FULL V3 scope**, triển khai qua các phase: game vẫn phải có social/ritual trong chùa chính trước.

## 3 bản đồ chùa chơi được
- CHUA_SEN: chùa chính hiện có; chùa + vườn duyên + sân dân gian + quán trà + hồ sen, bản đồ lớn, 30 người/phòng.
- CHUA_TRUC: ngôi chùa tưởng tượng kiểu Việt trong khu trúc 55×65m, 8 bồ đoàn, tràng hạt, nghe kinh, 2 photo viewpoints, 1 quán trà nhỏ.
- CHUA_MAY: chùa Việt tưởng tượng bên hồ 55×65m, 8 bồ đoàn, thiền, hoa đăng, nghe kinh, 2 góc cảnh.
Đây là các tên hư cấu; không mạo danh một địa điểm/chùa thật. Các bản đồ phụ phải là scene 3D thực có avatar/camera/va chạm/interaction/multiplayer, không chỉ thumbnail.
Travel: mở Bản đồ hành hương -> chọn chùa -> server kiểm tra sức chứa -> preload scene -> leave old room và join target room cùng guest/friends -> spawn tại cổng. Thất bại roll back an toàn, không duplicate avatar. Friend join across maps yêu cầu confirmation. Journal ghi “đã ghé” chỉ khi vào scene thật ít nhất 8s. Server map instance tách rooms; chat trong cùng map/room, DM bạn bè vẫn dùng được xuyên bản đồ.

## Sự kiện cộng đồng (mỗi hoạt động có thể chơi solo bất cứ lúc nào)
EV_MALA: cùng ngồi lần hạt nhưng đếm cá nhân giữ riêng tư; avatar đồng thời.
EV_BOW: 9/27/108 lạy nhóm, opt-in, đồng bộ nhịp, không xếp hạng công đức.
EV_LANTERN: cùng thả đèn hoa đăng từ lời mẫu được kiểm duyệt; server giới hạn 40 đèn.
EV_LISTEN: nghe kinh thật theo lịch nếu có audio đã được cấp phép cho shared playback; không phát lại audio của bên khác khi chưa quyền, có thể cho link nghe cá nhân.

Server timezone Asia/Ho_Chi_Minh. Default schedule: hàng ngày 19:30–19:45 hoa đăng, hàng ngày 20:00–20:10 tràng hạt; thứ Bảy 20:15–20:30 lễ nhóm; Chủ nhật 20:15–20:30 nghe kinh tự chọn. Có panel Lịch hoạt động, countdown từ server time, gia nhập bằng consent, rời khỏi bất kỳ lúc nào. No browser push trong v1. Sự kiện không yêu cầu tối thiểu 2 người; không spawn bot giả. 30/room, room overflow vào instance tiếp theo, mỗi instance có cùng giờ.

## “Công đức”, cấp độ và bảng xếp hạng
User nói thêm tất cả nên không loại bỏ progression. **Tách điểm game khỏi giá trị tâm linh thật**. UI chính dùng “Điểm trải nghiệm”, tooltip có thể ghi “chỉ là điểm trong game, không đánh giá công đức hay số mệnh”. Không cộng điểm theo số lần lạy, số hạt, thời gian tụng kinh, nội dung cầu nguyện, chi tiền hay bói tốt/xấu.

Server points rules (one-time unless noted):
- Ghé mỗi bản đồ lần đầu +10; 3 bản đồ = max30.
- Khám phá mỗi loại minigame trong soloOracle/pairOracle/starOffering/cutTies/xam lần đầu +4 = max20.
- Mở góc chụp ảnh đầu tiên mỗi map +2 = max6.
- Hoàn tất 4 bước hướng dẫn tùy chọn +2/step = max8.
- Tham gia lần đầu mỗi ngày 1 event >=30s +3; cap một event/day.
- Một hoạt động phối hợp với người thật được cả hai chấp thuận +4/day, max1/day.
Uniqueness key (guestId,reason,period,referenceId) blocks farming/duplicate replay. No reward for report/block, forcing romantic participation or speed counting.

Levels thresholds fixed EXP: 0,20,50,90,140,200 corresponding levels 1–6; all rewards are cosmetic profile frame/postcard, no restriction to read scripture, pray, social or travel. Optional leaderboard default OFF, MVP friends-only opt-in weekly discovery points capped weekly 30, shows anonymous alias only; no public ranking of chanting/lạy/compassion. Global ranking needs later safety approval. Player can hide progress UI entirely; no streak penalties, no paid boosts.

## Acceptance
3 real maps; travel rollback and cross-map friends; event server clock/timezone; no fabricated event participants; correct 30 room cap; points idempotent, level threshold, opt-out and private chat not leaking; ability to play every mode solo without participating in ranking.
