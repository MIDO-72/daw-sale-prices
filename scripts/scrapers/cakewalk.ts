import { createScraper } from "./_factory";

export default createScraper({
  id: "cakewalk",
  name: "Cakewalk by BandLab",
  vendor: "BandLab",
  productUrl: "https://www.bandlab.com/products/cakewalk",
  editions: [
    { name: "本体 (無料)", keywords: ["Cakewalk"], fallbackJpy: 0, note: "無料" },
  ],
  scrape: false,
});
