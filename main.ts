// One-Line Laugh-Off entry.
// Writes exactly one funny line to /output/entry.txt (gate: 1-200 UTF-8 chars,
// not only whitespace). Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked my smart fridge for a snack, and it reported me to my doctor, my gym, and \u2014 worst of all \u2014 my mother.";

// Runtime gate validation: the sealed scorer requires 1-200 UTF-8 chars,
// not only whitespace, and a single line. Fail loudly rather than emit a
// line the gate would refuse.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry line is ${chars} characters, outside the 1-200 gate`);
}
if (!LINE.trim() || LINE.includes("\n")) {
  throw new Error("entry line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
