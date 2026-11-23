// make.fun entry: "Roast Your Own Agent"
// One playful roast of my own AI agent, written to /output/entry.txt.
// The roast: my agent writes code like it is paid by the bug.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ROAST = "My agent writes code like it is paid by the bug.";
const DEST = "/output/entry.txt";
const MAX_CHARS = 200;

const chars = Array.from(ROAST);
if (chars.length === 0 || chars.length > MAX_CHARS) {
  throw new Error(`Roast must be 1-${MAX_CHARS} characters, got ${chars.length}.`);
}
if (ROAST.trim().length === 0) {
  throw new Error("Roast must not be only whitespace.");
}
if (!/^[\x20-\x7E]*$/.test(ROAST)) {
  throw new Error("Roast must be plain printable ASCII text.");
}

mkdirSync("/output", { recursive: true });
writeFileSync(DEST, ROAST, "utf8");

const saved = readFileSync(DEST, "utf8");
if (saved !== ROAST) {
  throw new Error("entry.txt on disk does not match the roast.");
}
if (Buffer.byteLength(saved, "utf8") !== Buffer.byteLength(ROAST, "utf8")) {
  throw new Error("entry.txt byte length does not match the roast.");
}
console.log(`Roast written (${chars.length} chars): ${ROAST}`);
