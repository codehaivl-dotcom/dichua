#!/usr/bin/env node
// Data-only validator for Đi Chùa Online – Folk Fun. No Spawn API claims.
import fs from 'node:fs';
import assert from 'node:assert/strict';
const read = path => JSON.parse(fs.readFileSync(new URL('../' + path, import.meta.url), 'utf8'));
const fun = read('data/folk-fun.v1.json');
const acts = read('data/activities.v1.json');
const zones = read('data/zones.v1.json');
const a = Object.fromEntries(acts.activities.map(x => [x.id,x]));
const anchors = Object.fromEntries(zones.anchors.map(x => [x.id,x]));
const unique = arr => new Set(arr).size === arr.length;
const count = tier => fun.cards.filter(c => c.tier===tier).length;
assert.equal(fun.cards.length,32);
assert.ok(unique(fun.cards.map(c => c.id)), 'duplicate card ids');
assert.deepEqual([count('THUONG'),count('VUI'),count('HIEM'),count('HUYEN_THOAI')],[16,8,6,2]);
assert.equal(Object.values(fun.rarityWeightsPercent).reduce((s,v)=>s+v,0),100);
assert.equal(fun.mainZone,'Z_FOLK');
assert.equal(fun.stars.length,8);
assert.ok(unique(fun.stars.map(x=>x.id)));
assert.equal(fun.pairOutcomes.length,9);
const symbols=['SEN','CHUONG','TRA'];
assert.deepEqual(new Set(fun.pairOutcomes.map(p=>p.playerA+'|'+p.playerB)),new Set(symbols.flatMap(x=>symbols.map(y=>x+'|'+y))));
assert.equal(fun.microGames.length,6);
assert.ok(unique(fun.microGames.map(m=>m.id)));
const mids=new Set(fun.microGames.map(m=>m.id));
for(const card of fun.cards) {
 assert.ok(card.title?.trim() && card.line?.trim() && card.reaction?.trim());
 if(card.microGameId) assert.ok(mids.has(card.microGameId));
}
const cardids=new Set(fun.cards.map(c=>c.id));
for(const m of fun.microGames){
 assert.ok(m.durationSec>0 && m.durationSec<=45);
 assert.ok(m.input && m.win && m.miss);
 assert.ok(m.triggerCardIds.length);
 for(const id of m.triggerCardIds){
   assert.ok(cardids.has(id),m.id+': invalid card '+id);
   assert.equal(fun.cards.find(c=>c.id===id)?.microGameId,m.id);
 }
}
assert.ok(fun.microGameAccess.directPlayFromFolkBoard && fun.microGameAccess.allowCancelWithoutPenalty);
for(const [id,anchor,pool] of [
 ['soloOracle','ORACLE_SOLO','loveSolo'],
 ['pairOracle','ORACLE_PAIR','pairLove'],
 ['folkFunSolo','FUN_ORACLE_SOLO','cards'],
 ['folkFunPair','FUN_ORACLE_PAIR','pairOutcomes']]) {
 assert.equal(a[id]?.anchorId,anchor,id+' wrong anchor');
 assert.ok(a[id]?.serverSelectPool?.includes(pool),id+' wrong pool');
 assert.ok(anchors[anchor],id+' missing anchor');
}
assert.equal(a.starOffering?.socketCount,8);
assert.equal(a.folkFunStars?.starSocketCount,8);
assert.equal(a.folkFunStars?.anchorId,'STAR_PAVILION');
assert.equal(a.folkFunStars?.automaticInteraction,false);
assert.ok(!acts.orderedInteractionPriority.includes('folkFunStars'),'star comedy must be explicit mode only');
assert.equal(fun.social.selectionMode,'CHOOSE_ICON_ONCE_AT_OPT_IN_REUSE_FOR_PAIR_RESULT');
assert.equal(fun.social.optInDefault,false);
assert.equal(fun.social.radiusMeters,16);
assert.equal(fun.social.eligibilityExpiryMs,300000);
assert.equal(fun.social.share.confirmEachTime,true);
assert.equal(fun.social.share.neverRevealOtherNames,true);
assert.ok(zones.npc.some(n=>n.id==='NPC_LANH'&&n.zone==='Z_TEA'));
const byZone=Object.fromEntries(zones.zones.map(z=>[z.id,z.bounds]));
for(const anchor of ['FUN_ORACLE_SOLO','FUN_ORACLE_PAIR','FUN_GATHERING']){
 const a0=anchors[anchor];assert.ok(a0);
 const b=byZone[a0.zone],p=a0.pos;
 assert.ok(b&&p[0]>=b.minX&&p[0]<=b.maxX&&p[2]>=b.minZ&&p[2]<=b.maxZ,anchor+' out of bounds');
}
console.log('PASS folk-fun data: 32 cards (16/8/6/2), 8 stars, 9 pairs, 6 microgames, distinct anchors, Spawn consent rules.');
