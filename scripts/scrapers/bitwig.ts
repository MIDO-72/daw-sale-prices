import { createScraper } from "./_factory";

export default createScraper({
  id: "bitwig",
  name: "Bitwig Studio",
  vendor: "Bitwig",
  productUrl: "https://www.bitwig.com/ja/buy/",
  editions: [
    { name: "Studio", keywords: ["Studio"], fallbackJpy: 53900 },
    { name: "Producer", keywords: ["Producer"], fallbackJpy: 26900 },
    { name: "Essentials", keywords: ["Essentials"], fallbackJpy: 13900 },
  ],
});
