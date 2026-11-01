# 15 — TRANG PHỤC ĐI CHÙA: ART + GAMEPLAY DRESS CODE (OWNER LOCKED 2026-11-01)

## Quyết định chủ dự án
**“Trang phục đi chùa cần phải trang trọng và lịch sự.”** Đây là yêu cầu bắt buộc cho toàn bộ concept art, avatar mặc định, NPC, khách tham quan trong map và hình ảnh quảng bá. Không được dùng ảnh reference Chùa Sen 01/11/2026 theo kiểu sao chép nguyên trang phục: váy xếp ly ngắn trên đầu gối của avatar chính trong ảnh đó **KHÔNG ĐƯỢC DUYỆT**.

### Visual fidelity vs outfit
Ảnh gameplay tham chiếu Chùa Sen được duyệt về **góc máy 3rd-person, mật độ người, tán cây, độ chi tiết 3D và bố cục lối đi/cổng tam quan**; không phải phê duyệt tạo hình phục trang. Nhân vật chính và cả NPC/avatar phụ đều phải được chỉnh thành trang phục lịch sự trước khi một concept được đánh dấu FINAL.

## Dress-code bắt buộc (PC + mobile, mọi bản đồ chùa)
- Kín đáo, sạch sẽ, vừa vặn, màu hài hòa, không cần đồng phục. Vai che kín; cổ áo không khoét sâu; tay áo tốt nhất dài hoặc qua khuỷu, ít nhất che vai và bắp tay; quần dài đến mắt cá, hoặc váy dài qua đầu gối **ưu tiên dài tới bắp chân/mắt cá**.
- Hình ảnh **khuyến nghị:** áo lam cư sĩ + quần dài, áo dài truyền thống kín đáo + quần dài, áo sơ mi kín đáo + quần dài/chinos, áo dài tay/áo khoác mỏng + quần dài, áo thun tay dài đơn giản + quần dài.
- Giày dép gọn, vừa đi bộ; hạn chế giày gót cao gây clip animation, giày sneaker trung tính được phép. Không bắt buộc ai cũng mặc áo nâu/áo lam hoặc pháp phục; không hóa trang khách thành sư/sãi khi họ là người thường.
- **KHÔNG CHẤP NHẬN** váy mini, váy xếp ly cao quá gối như concept đầu, quần short trên gối, crop top/hở bụng, áo hai dây/trễ vai, xuyên thấu, khoét lưng/ngực sâu, quần bó xuyên mỏng, đồ đi biển, áo in hình/phát ngôn thiếu tôn trọng, thiết kế gợi dục.
- Người chơi không phân nhóm/giới tính bắt buộc dựa trên quần áo; tất cả có quyền chọn kiểu phù hợp. Không phân loại/trừng phạt cơ thể/ngoại hình. Việc quy định quần áo là quy tắc thiết kế thế giới ảo, không phải đánh giá đạo đức người chơi thật.

## Bốn outfit mặc định, ID/thiết kế/rig
| ID | Tên UI | Tạo hình chính xác | Hoạt động phải hỗ trợ |
|---|---|---|---|
| OUTFIT_AO_LAM | Áo lam thanh lịch | Áo lam xám tro, tay dài, cổ kín, quần vải dài rộng, dép mềm | Đi bộ, lạy, quỳ/ngồi, lần hạt |
| OUTFIT_AO_DAI | Áo dài truyền thống | Áo dài cổ kín tay dài, tà đến dưới bắp chân, QUẦN DÀI bên trong; màu kem/xanh trầm | Đi bộ, ngồi, lạy; tà không cắt qua người/ghế |
| OUTFIT_SOMI | Sơ mi trang nhã | Sơ mi cổ kín tay dài, quần dài lịch sự màu đất, giày gọn | Đi bộ, uống trà, lạy, quẻ đôi |
| OUTFIT_CASUAL_MODEST | Đời thường lịch sự | Áo cardigan/áo tay dài kín đáo, quần ống suông dài, bảng màu trung tính, giày thấp | Đi dạo, chụp ảnh, hoạt động cộng đồng |

Tạo nam/nữ/phi định danh bằng **body mesh compatible**, phù hợp tuổi trưởng thành và không thay đổi chuẩn kín đáo theo giới. Palette tránh lòe loẹt và logo/nhãn hiệu thật không được phép.

## Nhân vật chính trong concept và camera
- Chỉ thay outfit; giữ silhouette người thật, tóc dài đen (nếu chọn nữ), chiều cao tự nhiên, camera sau lưng ~4.8m, chuyển động third-person.
- Từ hình tham chiếu đầu: **thay blouse + mini pleated skirt + vớ cao** bằng **áo dài kín đáo + quần dài hoặc áo lam + quần vải dài**. Chọn áo dài tông kem/lam là mặc định cho các concept tiếp theo để giữ nhận diện nhất quán.
- Các nhân vật background cũng không được mặc quần đùi/váy ngắn/crop top trong chùa.
- Chính điện trang nghiêm: khi dùng hệ thống trang phục trong tương lai, tất cả preset đi chùa đều đạt dress-code; tránh cửa sổ popup xấu hổ hoặc ép thay quần áo công khai. Một outfit không đạt chuẩn trong customization phải bị loại ngay từ catalog zone chùa, KHÔNG "mặc sai rồi đuổi khỏi chùa".

## Asset + animation acceptance
- 4 GLB preset, root/pivot/scale thống nhất, 1 humanoid rig compatible. Các mẫu vải dài phải được mô phỏng đơn giản hoặc rig/baked đủ tốt để không xuyên khi SIT_ENTER/SITTING, BOW/108 LẠY, MALA, BELL, OFFER, TEA, PHOTO.
- Không dùng cloth physics CPU nặng 30 người/phòng. Sử dụng bone skirt panels / masked intersections / authored secondary motion; LOD áp dụng mọi outfit.
- Camera thấp/ngồi/quỳ không nhìn xuyên trang phục, không phơi ngực/đùi do mesh clipping. Chuyển động mặc áo dài vẫn đi được, không giật tà.
- NPC_THIEN/NPC_DUYEN/NPC_SAO/NPC_AN/NPC_LANH có trang phục tương tự; họ là nhân vật dân sự hư cấu, không phải ai cũng mặc áo tăng sĩ.
- Asset registry lưu wardrobeId, license, render/rig quality, variant body sizes, coverage QA. Avatar outfit label/accessibility support in UI.

## Gate kiểm thử bắt buộc
**DRESS-01** 4 preset đều đạt khi đứng trong 8 vùng map Chùa Sen; đủ phủ vai/ngực/đùi.  
**DRESS-02** 10 hình concept tương lai (nếu làm) và tất cả NPC/background extras đều tuân thủ; đặc biệt avatar chính không có váy ngắn.  
**DRESS-03** 108 lạy, ngồi bồ đoàn, uống trà, lần hạt và đi bộ không xuyên váy/tà/quần.  
**DRESS-04** mobile/desktop chất liệu, LOD không biến quần áo thành transparent hoặc rách/đứt geometry.  
**DRESS-05** wardrobe selection rõ ràng, không gán loại phục trang theo giới hay tôn giáo bắt buộc.  
**DRESS-06** art review so ảnh tham chiếu: đúng cảnh/camera/chất lượng 3D, đúng trang phục mới; không copy phố Tây và không low-poly bắt buộc.

**Quy tắc đánh giá:** nếu sai trang phục, concept FAILED dù ánh sáng, kiến trúc, UI đẹp. Agent không được đánh dấu APPROVED chỉ vì giống ảnh tham chiếu.
