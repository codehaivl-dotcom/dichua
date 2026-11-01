# Đi Chùa Online — FULL SPEC V3 (2026-11-01)

**Status: specification committed; game code not implemented yet.**

A 3D third-person Vietnamese multiplayer **social game** combining the online-temple trend with **Phố Có Hẹn** social interaction: meeting players, proximity chat, friends, DMs, co-op experiences, tea, photos, fortune-telling and folklore activities. **Not Làng Xíu Xiu; no mandatory low-poly.** Use textured, natural-scale 3D style based on the user's 01/11/2026 third-person screenshot (quality/camera reference only, not Western street setting).

## All approved features
- Original social/folklore: love oracle solo/pair, dâng sao giải hạn, fictional cắt duyên âm, avatar, chat, friend list, joint activities, photo, NPCs, tea.
- **10 full temple-practice systems:** mala 18/54/108, lạy 1/9/27/108, real scripture listening/reading/reciting (tụng kinh), wooden-fish rhythm, meditation/timed breathing, lotus lanterns with public/private wishes, incense/flowers/lamps/fruit, xăm, cầu an, pilgrimage journal.
- **Five authentic Buddhist scripture catalog references**, listening links from real official sources; **two legally cleared playable Vietnamese in-game audio tracks required for full completion**, not yet produced.
- **Three real playable maps:** Chùa Sen (main), Chùa Trúc, Chùa Mây; group chanting/mala/bows/lantern events, travels, opt-in experience points/levels 1–6 and opt-in friends-only board (game-only, not religious merit).

## Read in order
1. [AGENTS](AGENTS.md) and [locked product scope](docs/00-VISION.md)
2. [Existing gameplay](docs/01-GAMEPLAY.md), [map/art](docs/02-WORLD-ART.md), [social](docs/03-SOCIAL.md), [UI](docs/04-UI.md), [NPC](docs/05-CONTENT.md)
3. [Architecture](docs/06-TECH.md), [Safety](docs/07-SAFETY.md), [Original QA](docs/08-QA.md), [Original phases](docs/09-DELIVERY.md)
4. [All 10 temple practices](docs/10-TEMPLE-ACTIVITIES.md)
5. [Five REAL Buddhist texts/audio licensing](docs/11-SUTRA-LIBRARY.md)
6. [Pilgrimage, events, XP and levels](docs/12-PILGRIMAGE-PROGRESSION.md)
7. [Expanded acceptance](docs/13-V3-QA.md) and [agent build order](docs/14-V3-IMPLEMENTATION.md)

Exact config/data: [temple practices](data/temple-practices.v3.json), [sutra catalog](data/sutras.v1.json), [xăm](data/xam.v1.json), [pilgrimages](data/pilgrimage.v1.json), [events](data/events.v1.json), [progression](data/progression.v1.json), plus [social activities](data/activities.v1.json), [world](data/zones.v1.json), [fortune](data/fortune.v1.json).

**Important audio status:** existing recordings on Chùa Giác Ngộ website are publicly listenable but **do not grant a license to embed/rehost MP3 in the game**. Agent must provide official listening links first; ship in-game playback only after written rights/public-domain evidence and a real recorded or licensed TTS file. Fortune/xăm and folklore rituals are entertainment, distinct from actual Buddhist scripture. All forms of actual worship are free; no spiritual superiority score.
