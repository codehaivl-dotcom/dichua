# 16 — Concept art reference board · 10 gameplay screens

**Owner:** yêu cầu 10 ảnh concept màn chơi. **Hiện mới tạo được 01 ảnh concept Chùa Sen trong cuộc trò chuyện; ảnh gốc chưa được thêm dưới dạng binary vào GitHub repo**. Đây là mô tả canon để agent/art director triển khai ảnh tiếp theo và bản render 3D. KHÔNG báo là đã có đủ 10 ảnh, KHÔNG dùng mock concept thay bằng runtime screenshots.

## VISUAL-REF-01 — Sân Chùa Sen Social Hub (created in ChatGPT 2026-11-01)
- Source artifact in ChatGPT conversation: generated image "chùa_sen_courtyard_social_hub.png"; image available in chat, **not yet committed** as repo asset.
- Composition: daylight Vietnamese tam quan with Chùa Sen plaque, large banyan tree left, teahouse left, lotus and stone lanterns right, main hall centered beyond tam quan, many human-scale avatars scattered social groups, avatar woman seen from behind in foreground, subtle minimap top-left / people-chat-events top-right / nearby bubble / action button bottom.
- Keep: third-person game screenshot feel, depth of scene, textured stylized/semi-realistic 3D, natural population density, Vietnamese pagoda scenery.
- **REJECT FOR FINAL:** woman's very short pleated skirt and high socks (inappropriate for pagoda), casual shorts/short skirts on some visitors, noisy UI text if illegible. **REPLACE with conservative ankle-length trousers and modest áo lam / áo dài, including background characters.** No one dressed as religious clergy by default.
- Corrected visual prompt: "Recreate the same 16:9 third-person Chùa Sen social hub gameplay scene with warm daylight and textured 3D. Main character adult Vietnamese woman from behind, long black hair, wearing a graceful cream ao dai with high neckline, full-length sleeves and full-length trousers, low closed shoes; all visitors wear modest Vietnamese pagoda-appropriate clothes, shoulder covering, ankle-length trousers or mid-calf skirts, no mini skirts, no shorts. Retain Vietnamese temple tam quan, trees, tea pavilion, populated social groups and subtle playable HUD. Natural realistic proportions, no mandatory low-poly, no poster/collage."

## Next 9 distinct gameplay screens (art briefs, no assets generated yet)
| ID | Actual gameplay moment | Required shot/HUD | Specific visual checks |
|---|---|---|---|
| C02 | Chính điện / 108 lạy | third-person side-three-quarter, group lạy on mats, progress e.g. 27/108, Pause | modest outfits don't clip at prostration |
| C03 | Lần tràng hạt | character seated, in-scene close-up of actual 108 beads, 37/108 UI and next control | readable beads, no floating abstract progress only |
| C04 | Nghe kinh thật / gõ mõ | authorized source panel + monk-free visitor in reading corner, optional wooden-fish rhythm | scripture must match genuine licensed text source, no fabricated verse |
| C05 | Xin quẻ tình duyên solo | red-thread garden, NPC Duyên, 3 sealed cards, revealed reflective card | entertainment zone separate from sacred main hall |
| C06 | Quẻ đôi và kết bạn | two real consenting avatars left/right altar, Accept/Decline, chat/friend invitation | no forced coupling, both appropriately dressed |
| C07 | Dâng sao giải hạn biểu tượng | folk pavilion, star align puzzle, calm lantern lighting | no claiming real supernatural power |
| C08 | Cắt duyên âm – buông duyên cũ | fictional thread ring puzzle near mirror/basin, character interacting | no demonic imagery, no horror, clear folklore disclaimer |
| C09 | Thả hoa đăng tập thể | lotus pond evening scene, 10–20 players, floating lights + privacy choice | no public wishes without moderation |
| C10 | Quán trà / bạn bè / sự kiện | third-person over-shoulder view, 2–4 friends sitting and social UI | traditional Vietnamese tea scene, social feel; no casino/dating banners |

### Global rules for all 10
- 16:9 landscape full-screen in-engine GAMEPLAY concept, one continuous shot/image each, not moodboard, diagram, collage or asset sheet.
- Same visual style and coherent avatar/NPC wardrobe across scenes: textured stylized/semi-realistic 3D, camera 3rd-person, real environmental scale, Vietnamese architecture.
- **Dress code is LOCKED:** follow docs/15-WARDROBE-DRESS-CODE.md; no short skirts, shorts or revealing shoulders/chests for any visitors. Design for 18+ adult avatars.
- HUD limited to context-appropriate controls and should not obscure actions. Do not invent completed game features or title "screenshot" unless genuinely rendered from working runtime.
- Every scene can be recreated in actual code/runtime and tested by product owner. Store finalized approved image assets under assets/concepts/ once the binary images are actually supplied and legitimately uploaded.

### Art review checklist
1. Vietnamese pagoda, not Chinese palace/Japanese shrine/European street.
2. Apparel dignified, different real outfits, no mini-skirt.
3. Action understandable without reading giant text.
4. Camera and scale identical game family.
5. Props are buildable and recognizable in 3D.
6. HUD correct for each feature, not a reused generic UI screenshot.
7. Privacy/licensing and fictional-vs-authentic content respected.
