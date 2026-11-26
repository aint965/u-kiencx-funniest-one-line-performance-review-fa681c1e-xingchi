// Funniest One-Line Performance Review — entry for @aint965.
// Writes one fixed, deterministic review line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Promotion recommended: he delegated his review to the only employee paid in exposure.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
