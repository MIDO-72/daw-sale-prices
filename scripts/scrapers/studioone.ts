import { createScraper } from "./_factory";

export default createScraper({
  id: "studioone",
  name: "Studio One",
  vendor: "PreSonus",
  productUrl: "https://www.mi7.co.jp/products/presonus/studioone7/",
  editions: [
    { name: "Pro", keywords: ["Pro"], fallbackJpy: 49500 },
    { name: "Artist", keywords: ["Artist"], fallbackJpy: 13200 },
    { name: "Prime", keywords: ["Prime"], fallbackJpy: 0, note: "無料" },
  ],
});
