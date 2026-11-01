> **WARDROBE OVERRIDE 2026-11-01:** New owner dress-code in [docs/15](15-WARDROBE-DRESS-CODE.md) is LOCKED. The existing “modest neutral” fashion direction is inadequate if it results in above-knee miniskirt/shorts. **Every** avatar/NPC/extras must have conservative Vietnamese pagoda clothing; see manifest [data/avatar-wardrobe.v1.json](../data/avatar-wardrobe.v1.json). Screenshot generated 01/11/2026 is NOT outfit approval.

> **OWNER V3 EXPANSION (2026-11-01):** New required features supersede any conflicting older MVP exclusion. See docs/10–14 and AGENTS.md. Sections below are retained as baseline for initial social/folklore phase, not the entire full-game scope.

# 02 — World, environment, camera and asset production

## One continuous 3D place
140m x 150m bounds (x=-70..70; z=-70..80), Three.js Y-up; north negative Z. The street in front leads to a Vietnamese pagoda compound with connected gardens. Third-person player camera feels like “Phố Có Hẹn” reference: natural scale, textured geometry, modest shadow contact, population and prop density. **NOT low-poly mandatory**; blockout not accepted as final. Reference screenshot supplied in chat 01/11/2026 is not yet committed as an asset; agent may request it for precise side-by-side review.

### Zones (canonical in data/zones.v1.json)
| Zone | Center (x,z) | Purpose |
|---|---|---|
| Z_GATE | 0,65 | Cổng tam quan, spawn + NPC Thiện |
| Z_STREET | 0,61 | Phố trước chùa; communication / social |
| Z_COURTYARD | 0,8 | Sân chùa, cây bóng mát, photos |
| Z_HALL | 0,-45 | Chính điện, 16 mat seats, chuông, hương ảo |
| Z_LOVE | 45,-12 | Vườn duyên, NPC Duyên, solo / pair quẻ |
| Z_FOLK | -45,-25 | Sân dân gian, NPC Sao + An, star/cut-ties |
| Z_TEA | -43,40 | Quán trà, 4 bàn 4 ghế, social hot spot |
| Z_POND | 49,34 | Hồ sen, điểm ảnh và ngắm cảnh |

Walkway width main 4m+, side 2.8m+, hall door 3m+. Visible path to each hub. 6 entry spawn pads near gate; no spawn inside altars/trees. Position NPC/story/activities exactly by authored anchors in data. No invisible wall trapping in the center. Photomode cannot peek through roof geometry.

### Materials & look
Roof terra-cotta clay tiles (#9A553F), warm aged plaster (#D4BE95), brick courtyard (#9B5C4B), dark wood (#49392E), lotus greenery (#69866A), restrained lantern lighting (#BFA06C). PBR textures but stylized; vegetation reasonably realistic, shadow contact and scale. No Japanese torii, no Chinese palace dragon roof, no European shutters/cafés from image reference. Temple details should use vetted Vietnamese architectural references. Avoid fake sacred scripture or arbitrarily fabricated deity art.

### Assets required
Main hall, tam quan, street shops, tea stall, lotus pond, folk pavilion, love garden, incense burner, bell, 16 mats, 4 tea tables, 16 chairs, 8 star sockets, 2 oracle tables, 3 cut-ties props (mirror, three-ring puzzle, basin), photo frame/stand, ~15 decorative props, 8 tree/shrub variants, 4 NPC models, 4 avatar looks sharing humanoid rig, 10 animation clips minimum. Every asset registered with source/license, scale, pivot and LOD. GLB/glTF runtime, texture compression KTX2 where possible, static geometry instanced or merged.

### LOD/performance goals (not claims)
Desktop visible <=900k triangles and <=450 draw calls typical courtyard, mobile <=350k tris and <=180 calls; max initial compressed assets 14MB desktop / 9MB mobile preferred with lazy-load decorative detail. 30 avatars nearby with LOD. Desktop 50–60FPS and mobile >=30FPS on test devices. No volumetric/photoreal heavy postprocess. Don't use aggressive simplification that drops recognizable architectural detail.

### Spatial etiquette
Main hall quiet zone — no nearby chat bubbles, social prompts toned down. Folk divination has separate signage “Trải nghiệm dân gian / giải trí” and no supposed temple authority. Love garden / tea are visibly welcoming social hubs; avoid making romantic area dominate the religious main hall.

### Camera/animation
Camera default avatar-relative distance 4.8m, adjustable 3–7m, pitch 10–55deg down, vertical FOV 58° desktop/62° phone; collision and roof occlusion. Clip IDs: idle, walk, brisk_walk, sit_enter, sit_loop, sit_exit, bow, wave, incense, bell, oracle_draw, star_light, thread_release, tea_sit, photo_pose, puzzle_idle. Avatar root at feet, consistent rig scale and facing; in-place locomotion server-driven, no foot skating.
Audio: birds, gentle breeze, brick footsteps, indoor quiet bed, bell once, token/lantern sounds. OFF until user gesture or user has preference, mute/settings available. No copyrighted chant or forced religious audio.

### Runtime screenshots acceptance
Gate, dense courtyard with real test avatars, hall, love garden (pair), folk stage, tea social, pond, and mobile portrait/landscape. All from playable build, never concept image presented as implementation.


### V3 world expansion
Existing eight zones define **CHUA_SEN main scene only**. Add genuine playable **CHUA_TRUC** and **CHUA_MAY** from data/pilgrimage.v1.json; collision, props, avatar presence and server travel, not static thumbnails. Provide stations for tràng hạt, lạy Phật, gõ mõ, genuine sutra listening, meditating, flower/fruit/light offerings, xăm, lanterns and events in culturally appropriate zones. Same user-supplied 3D fidelity reference; low-poly optional, not mandated.
