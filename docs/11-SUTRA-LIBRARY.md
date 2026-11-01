# 11 — Thư viện KINH PHẬT THẬT và audio

Owner yêu cầu có kinh Phật thật để người chơi có thể nghe. **Không dùng văn do AI viết thành “kinh”**, không trộn bói tình duyên với văn bản kinh điển.

## Danh sách 5 tác phẩm thực, nguồn cụ thể
1. **Bát Nhã Tâm Kinh** — Heart Sutra/Prajñāpāramitāhṛdayasūtra; bản tiếng Việt ghi công Trần Trọng Kim tại Wikisource: https://vi.wikisource.org/wiki/B%C3%A1t-nh%C3%A3_ba-la-m%E1%BA%ADt-%C4%91a_t%C3%A2m_kinh . Văn bản là ứng viên để nhập nội bộ sau xác minh bản quyền theo vùng phát hành và đối soát văn bản. Audio riêng chưa được cấp phép.
2. **Kinh Từ Bi** — Karaṇīya Mettā Sutta, Snp 1.8, gốc Pali https://suttacentral.net/snp1.8/pli/ms ; bản nghe tiếng Việt thực tại Chùa Giác Ngộ https://www.chuagiacngo.com/kinh-phat-can-ban/09-kinh-tu-bi ; bài do Thích Nhật Từ biên soạn/dịch, Giác Diệu Thanh trình bày theo trang nguồn. Chỉ dùng LINK NGHE CHÍNH THỨC cho tới khi có giấy phép nhúng/phân phối.
3. **Kinh Phước Đức** — Maṅgala Sutta, Snp 2.4, gốc Pali https://suttacentral.net/snp2.4/pli/ms ; nguồn nghe tiếng Việt Chùa Giác Ngộ https://www.chuagiacngo.com/kinh-phat-ve-dao-duc-va-xa-hoi/8-kinh-phuoc-duc ; trang nguồn ghi tác giả Thích Nhật Từ, trình bày Thanh Thuyết. Chỉ LINK chính thức chưa có quyền rehost.
4. **Kinh Pháp Cú** — Dhammapada, gốc Pali, tập tham khảo https://suttacentral.net/dhp1-20/pli/ms ; bản dịch tiếng Việt phải chọn/ghi dịch giả và xác minh license trước khi sao chép; chưa có audio nội bộ.
5. **Kinh Chuyển Pháp Luân** — Dhammacakkappavattana Sutta, SN 56.11, gốc Pali https://suttacentral.net/sn56.11/pli/ms ; bản nghe trong album chính thức Chùa Giác Ngộ https://www.chuagiacngo.com/en/node/100366 ; bản audio/dịch phải tra đúng phiên bản và giấy phép.

## Luật bản quyền bắt buộc
- SuttaCentral licensing https://suttacentral.net/licensing : bản gốc cổ Pali/Hán/Phạn thường thuộc phạm vi công cộng, nội dung do SuttaCentral tạo CC0, nhưng bản dịch bên thứ ba CÓ THỂ còn bản quyền. **Tách quyền nguyên tác, quyền bản dịch tiếng Việt, quyền bản thu giọng nói.**
- Việc Chùa Giác Ngộ cho NGHE/TẢI MP3 không tự động cấp quyền mang vào game, rehost, nhúng trực tiếp, đồng bộ livestream hay dùng tạo TTS. Khi chưa được phép, nút **“Nghe tại nguồn”** mở trang chính thức, KHÔNG phát MP3 của họ trong game.
- Bản Trần Trọng Kim trên Wikisource cũng cần xác minh edition và lãnh thổ bảo hộ trước khi nhập/đọc TTS.
- Nếu tạo giọng đọc riêng từ **bản dịch đã được cấp phép hoặc thuộc public domain đã xác minh**, có thể sản xuất MP3/TTS cho nghe trực tiếp, ghi “Giọng đọc tổng hợp” nếu dùng TTS, không giả danh sư thầy; giữ nguyên 100% câu chữ approved, không paraphrase.
- Không yêu cầu người chơi cung cấp giọng, câu niệm hay dữ liệu tôn giáo cá nhân.

## UI/Playback
Nút “Nghe kinh thật” tại thư viện/hall -> 5 card có tên kinh + nguồn + dịch giả + dấu trạng thái nội dung. Audio nếu quyền CLEARED_LOCAL thì có **Play/Pause, tua, tốc độ .75/1/1.25, volume, captions, transcript VN**; nếu chưa có bản được phép thì hiển thị “Nghe tại nguồn” mở link bên ngoài và ghi rõ không phải player nội bộ. Không auto-play, không phát cho cả phòng. Khi audio được cấp phép hỗ trợ nghe trong lúc avatar ngồi hoặc đi lại, riêng tư. Không thể ghi DONE chỉ vì vẽ nút Play.

## Kiểm duyệt nội dung
Mỗi tác phẩm có canonicalId, loại truyền thống, source URL, translator, edition, textStatus, audioStatus, rightsReceipt, audioAssetHash. Content import bị CI chặn nếu audioStatus=CLEARED_LOCAL nhưng thiếu file, hợp đồng/lý do public domain, hoặc hash. Khi release hoàn chỉnh, mục tiêu **tối thiểu 2 bài kinh nghe trực tiếp trong game bằng audio hợp pháp**, ngoài 5 link nguồn. Nếu không xin được bản quyền/không tạo được bản thu hợp pháp, ghi UNVERIFIED/BLOCKED, không làm audio giả.

## Reference
Truy xuất thông tin/cấp phép đúng tại nguồn; không sao chép hàng loạt kinh điển từ Internet hoặc dùng để train AI.

## Chế độ đọc và tụng theo kinh
Khi bản chữ Việt đã được quyền dùng: “Đọc kinh” hiển thị nguyên văn, có font lớn, next-line/manual highlight và lưu vị trí riêng tư. Khi có bản audio đã được quyền dùng: thêm “Tụng theo bản thu” với tự động highlight theo timestamp / lời kinh đúng nguồn. Không xin quyền micro, không ghi âm giọng người chơi. Nhóm có thể đồng bộ câu/đoạn bằng server sau khi mỗi người opt-in, nhưng nghe audio riêng tư trên từng client. Không chấm điểm hay xếp hạng tốc độ tụng. Nếu không có văn bản tiếng Việt cấp phép, chỉ hiện nguồn đọc/nghe bên ngoài, không giả là player nội bộ.
