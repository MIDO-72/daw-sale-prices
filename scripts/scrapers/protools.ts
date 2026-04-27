import { createScraper } from "./_factory";

export default createScraper({
  id: "protools",
  name: "Pro Tools",
  vendor: "Avid",
  productUrl: "https://www.avid.com/ja/pro-tools",
  editions: [
    { name: "Studio (年間サブスク)", keywords: ["Studio"], fallbackJpy: 47800 },
    { name: "Artist (年間サブスク)", keywords: ["Artist"], fallbackJpy: 14500 },
    { name: "Intro", keywords: ["Intro"], fallbackJpy: 0, note: "無料" },
  ],
});
