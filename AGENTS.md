# HỢP ĐỒNG AGENT — ĐỌC TRƯỚC KHI CODE

1. **Ưu tiên:** lệnh owner mới nhất > 00-VISION > spec khác > data JSON > code. Bản thiết kế “quiet temple, no chat, 6 actions only” ĐÃ BỊ owner sửa và không còn hiệu lực.
2. Đích là **social-game 3D như Phố Có Hẹn**, có chat/kết bạn/co-op/quẻ/hoạt động; không nhầm với Làng Xíu Xiu, không làm 1 scene chỉ đi dạo.
3. Visual: textured third-person 3D stylized semi-realistic/mid-poly; **low-poly không bắt buộc**. Bối cảnh Việt Nam, không được lấy phố châu Âu trong ảnh làm world.
4. Tất cả việc bói duyên, dâng sao giải hạn, cắt duyên âm phải là biểu tượng/game dân gian. Không bịa khẳng định ma quỷ/vận hạn, không thu phí để hóa giải, không đòi ngày sinh, ảnh khuôn mặt, tên thật, địa chỉ.
5. Người khác trong phòng là người chơi thật. Không giả online, bạn bè, tin nhắn hay multiplayer bằng NPC. NPC phải được gắn rõ.
6. Social: consent cho mời chơi đôi, yêu cầu kết bạn, tin nhắn; có block/report/mute trước khi bật chat.
7. Thực hiện từng vertical slice chạy được, có screenshot VIDEO từ bản chạy thật và network trace 2 trình duyệt. Một render tĩnh không phải gameplay. Test mock không thay test integration.
8. Không tùy tiện thêm combat, XP, shop tiền công đức, leaderboard, matchmaking tình yêu tự động, pay-to-win, streak, open text input vào quẻ.
9. Khi thiếu yêu cầu, báo DECISION_REQUIRED với tối đa 2 phương án; không tự sáng tác. Ghi rõ implemented/tested/unverified/blocked trong PR. Không kéo dài audit thay vì code.
10. Code TS strict, schema runtime validation server, pnpm lockfile, CI; không commit token, secrets, assets không rõ license.
11. Mọi điều khiển, activity, UI phải chạy desktop + mobile (touch); tránh NPC/asset blockout giả làm bản final.
12. Bước đầu: Phase 0 -> Phase 1 theo docs/09-DELIVERY; không làm toàn bộ map chi tiết trước khi chứng minh core loop social hoạt động.
