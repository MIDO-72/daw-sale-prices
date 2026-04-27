import { createScraper } from "./_factory";

export default createScraper({
  id: "cubase",
  name: "Cubase",
  vendor: "Steinberg",
  productUrl: "https://www.steinberg.net/ja/cubase/buy/",
  editions: [
    { name: "Pro", keywords: ["Cubase Pro"], fallbackJpy: 71500 },
    { name: "Artist", keywords: ["Cubase Artist"], fallbackJpy: 38500 },
    { name: "Elements", keywords: ["Cubase Elements"], fallbackJpy: 13200 },
  ],
});
