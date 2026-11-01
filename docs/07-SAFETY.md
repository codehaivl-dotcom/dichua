> **OWNER V3 EXPANSION (2026-11-01):** New required features supersede any conflicting older MVP exclusion. See docs/10–14 and AGENTS.md. Sections below are retained as baseline for initial social/folklore phase, not the entire full-game scope.

# 07 — Safety, privacy, religious/cultural boundaries

## Respect culture and faith
A commercial entertainment game may depict Vietnamese Buddhism and folk traditions but must **not** suggest “cắt duyên âm” and “dâng sao giải hạn” are canonically validated Buddhist rites or promise real-world spiritual effects. Put folklore activities in clearly separate Z_FOLK/Z_LOVE areas from main worship hall. Respectful signage: “Trải nghiệm văn hóa, mang tính giải trí; không dự đoán hay thay đổi số phận.” No fabricated sacred scriptures, distressing “you have a spirit” statements, curse meters, negative destiny, fee to clear bad luck, gambling for good fortune, paywall for prayer. No name/birthdate/horoscope needed.

## Social safety (release-blocking)
Adult-targeted, self-declared 18+ (not verified ID). No contact exchange feature, no photo upload or public profile details. Chat filtering for harassment, slurs, spam, URLs/invites, self-identifying contact details patterns; report/block/mute accessible from player/DM, effective server-side. Public chat proximity 16m, quiet zone, slow mode, friend-only DM; report review pipeline. No auto-coupling/sexual matchmaking. Player avatar can hide photo representation. Clear terms/cookie/privacy disclosure in Vietnamese.

## Data policy targets (must reflect actual implementation before public launch)
Collect opaque guest ID, alias, avatar config, friends/pending, last 20 private fortune cards, DM only if mutual, report evidence and necessary security metadata. Do not collect real name, birthday, exact GPS, payment info, camera, microphone in MVP.
Public nearby chat ephemeral only, not DB history unless a reported event needs narrowly limited evidence. DM auto-expire 30d; pending friend request expires 7d; unlinked guest 30d retention if not returned and no active report; reports retain 90d unless legal/security review. User can access Delete guest control to erase account and applicable relationships/messages; report records may require limited separate retention. Policy must be translated into clear privacy notice and tested.
No trackers/advertising SDKs in MVP; minimal anonymous aggregate event counts only where consent/legal basis supports. Handle French/EU GDPR obligations with legal review of consent/cookies, access/deletion, hosting and data processors before launch.

## Technical security
HttpOnly Secure SameSite cookie, CSRF for mutations, WS origin validation, authz on every friend/DM/activity query, rate-limit, session rotate, sanitized render text, no raw HTML interpolation, hashed/segregated logging, HTTPS/WSS, no secrets in git. No public player search by private ID. Restrict invite targeting to users in same room and within authored distance except already mutual friends room-join invitation.

## Unsafe scenarios to reject
A player tries “trừ tà cho người khác” without consent -> never allowed.
An output scares user into paying to avoid bad luck -> forbidden.
A stranger spams romance invite every second -> rate limit, block and report.
A blocked sender DMs through a second endpoint -> all server routes check block.
User enters birth date/contact into fortune -> no input field exists.
Child claims age under 18 -> don't enable romance/social features; show age-ineligible explanation/exit.
Photo pose requester uploads screenshot automatically -> no remote uploads.
Third-party asset without license -> cannot ship.

## Rights
Review architecture and ritual symbolism with culturally knowledgeable reviewer before public launch; original or licensed glTF models/music, attribution manifest, no copyrighted social media images. Fictional NPC shouldn't impersonate real monks or temples.


### V3 legal/privacy safeguards
The public online game includes authentic Buddhist references AND fictional folk games; never conflate them. Modern Vietnamese translation rights, sound recording rights and original ancient scripture rights are separate. Do not copy MP3 hosted by Chùa Giác Ngộ without permission. Prayer text private unless user consents and moderation approves; only templates public until moderation is reliable. Long practice pause/quit anytime, no medical claims. XP purely for discovery/cooperation, never for number of bows, chanting minutes or beads. Opt-in anonymous friend ranks only.
