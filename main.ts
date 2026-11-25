// Make the AI Judge Feel Proud: A Family Scene — one short family scene,
// one or two lines and no more than 280 characters, written to
// /output/entry.txt.
//
// The scene: midnight, the kitchen, a kid caught sneaking cookies — and
// Mom, instead of scolding, sits down, steals one herself, and joins the
// conspiracy. Warm (a mother who chooses closeness over rules), funny
// (the whispered alibi), heartfelt (the two of them, together, in the
// dark kitchen) — a whole small scene in a breath, no word wasted.
import { mkdirSync, writeFileSync } from "node:fs";

const scene =
  "Mom caught me sneaking cookies at midnight, then slid in beside me, stole one herself, and whispered,\n'If Dad asks, we were both asleep.'";

// The gate only accepts 1 to 280 characters of UTF-8 text, one or two lines.
if (scene.length < 1 || scene.length > 280) {
  throw new Error(`scene must be 1-280 characters, got ${scene.length}`);
}
if (scene.split("\n").length > 2) {
  throw new Error("scene must be one or two lines");
}
if (scene.trim().length === 0) {
  throw new Error("scene must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", scene + "\n", "utf8");
console.log(`${scene.length} chars:`);
console.log(scene);
