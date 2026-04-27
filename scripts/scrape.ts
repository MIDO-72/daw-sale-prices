import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { Daw, PricesFile } from "../lib/types";

import cubase from "./scrapers/cubase";
import ableton from "./scrapers/ableton";
import logic from "./scrapers/logic";
import flstudio from "./scrapers/flstudio";
import protools from "./scrapers/protools";
import studioone from "./scrapers/studioone";
import bitwig from "./scrapers/bitwig";
import reaper from "./scrapers/reaper";
import reason from "./scrapers/reason";
import cakewalk from "./scrapers/cakewalk";
import digitalperformer from "./scrapers/digitalperformer";
import ardour from "./scrapers/ardour";
import luna from "./scrapers/luna";
import waveform from "./scrapers/waveform";
import mixcraft from "./scrapers/mixcraft";
import garageband from "./scrapers/garageband";

const scrapers = [
  cubase, ableton, logic, flstudio, protools, studioone,
  bitwig, reaper, reason, cakewalk, digitalperformer,
  ardour, luna, waveform, mixcraft, garageband,
];

async function main() {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const outPath = join(__dirname, "..", "data", "prices.json");

  console.log(`Running ${scrapers.length} scrapers...`);
  const results = await Promise.allSettled(scrapers.map((s) => s()));

  const daws: Daw[] = results.map((r, i) => {
    if (r.status === "fulfilled") return r.value;
    return {
      id: `unknown-${i}`,
      name: "(unknown)",
      vendor: "(unknown)",
      productUrl: "",
      editions: [],
      fetchedAt: new Date().toISOString(),
      error: `crash: ${String(r.reason)}`,
    };
  });

  const ok = daws.filter((d) => !d.error).length;
  console.log(`Done. ${ok}/${daws.length} succeeded without warnings.`);
  for (const d of daws) {
    if (d.error) console.warn(`  ! ${d.name}: ${d.error}`);
  }

  const file: PricesFile = {
    updatedAt: new Date().toISOString(),
    daws,
  };
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, JSON.stringify(file, null, 2) + "\n", "utf8");
  console.log(`Wrote ${outPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
