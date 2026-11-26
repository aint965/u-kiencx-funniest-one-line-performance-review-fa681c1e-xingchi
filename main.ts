// Funniest One-Line Performance Review — entry for @aint965.
// Writes one fixed, deterministic review line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Promotion recommended: delegates his own performance review to the only employee he never pays.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
