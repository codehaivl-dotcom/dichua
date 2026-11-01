# 00 — Product Vision / LOCKED v2 · 2026-11-01

## Fantasy
“Vào một ngôi chùa Việt online, xin quẻ tình duyên, dâng sao, tham gia chuyện dân gian cắt duyên âm, rồi tình cờ gặp người khác, trò chuyện, kết bạn, hẹn nhau đi lễ hoặc uống trà lần tới.” Tương tác lãng mạn TỰ NGUYỆN, không phải ứng dụng hẹn hò áp đặt.

### Core pillars
A. **Đi chùa:** đi bộ, lễ Phật, thắp hương ảo, chuông, ngồi, nghe, tham quan, chụp ảnh.
B. **Hoạt động:** xin quẻ solo/đôi, dâng sao giải hạn, cắt duyên âm mang tính truyện dân gian, có animation, lựa chọn, kết quả.
C. **Phố Có Hẹn-style social:** avatar, third-person free-roam, chat gần, gặp người thật, mời tham gia, add friend, DM mutual friends, đi cùng nhau, quán trà, ảnh nhóm.

### Locked MVP
- Web desktop/mobile, 3D third-person, 1 map (chùa Việt + phố/cổng + vườn duyên + sân dân gian + quán trà + hồ sen).
- Anonymous guest vào nhanh; tự chọn 1 trong 4 avatar preset; alias hiển thị không chứa danh tính thật. Lưu lại guest/session an toàn để dùng bạn bè khi quay lại trên cùng trình duyệt.
- Multiplayer thật 30/phòng là mục tiêu khởi đầu; cap có thể 50 sau test. Friend system persistence, proximity text chat, mutual DM, invite to ritual, join friend, block/report, 4 NPC.
- Có 4 mini-game cốt lõi (solo love oracle, pair oracle, star offering, fictional cut-ties), hoạt động đi chùa, uống trà, photo mode.
- 1 chuỗi hướng dẫn ngắn tùy chọn, 4–5 điểm, không quest XP hay tiền.
- Quẻ có nội dung biên tập tĩnh, chọn ngẫu nhiên server; không AI phán vận mệnh.
- Không có voice chat trong MVP; voice optional, opt-in post-MVP với báo cáo/chặn. Không combat, vật phẩm pay-to-win, tiền công đức, cấp độ, leaderboard.
- 18+ target (tương tác tình duyên/chat); entry có self-attestation tuổi và điều khoản cơ bản. Đây không phải hệ thống chứng thực tuổi mạnh.
- Audio có nút tắt; performance tối ưu nhưng chất lượng 3D không ép low-poly.

### Session loop
Enter guest -> avatar -> spawn gate -> guide NPC -> solo quẻ -> explore -> chat/wave -> friend request / pair invite -> partner accepts -> pair activity -> dâng sao or chuyện cắt duyên -> quán trà/photo -> DM/invite -> leave/rejoin. Người một mình hoàn thành hoạt động được; social không phải “cửa khóa” để chơi.

### Product laws
- Không dự đoán định mệnh thật, đe dọa về vong/hạn, dùng tiền để “giải hạn”.
- Folk fantasy hub cách biệt chính điện: không trình bày cắt duyên âm là nghi thức Phật giáo chính thống.
- Không tự động ghép đôi hoặc coi chơi cùng = yêu nhau. Friend request phải được chấp nhận.
- Không làm fake avatar, fake friend, fake event; server quyết định state.
- Không ép login, mời bạn hoặc chia sẻ kết quả.
- Đối thoại xã hội chỉ trong khu được phép; im lặng ở chính điện. Chat DM riêng chỉ khi hai phía là bạn bè.

### Scope after MVP
Room parties, photo albums/cloud share, seasonal festivals, 108-lạy trải nghiệm tùy chọn, nhiều chùa, proximity voice opt-in, art expansion, extra NPC narrative. **Không tự làm trước MVP.**

### KPIs (targets, not achieved)
First playable <=12s p75 mid-phone 4G cached; >=30 mobile FPS; >=50 desktop FPS in normal room; two independent browsers see each other, chat, mutual friend, duo quẻ; 10min solo gameplay, 10min social; 30 client load test; 0 wrong-safety critical leaks.
