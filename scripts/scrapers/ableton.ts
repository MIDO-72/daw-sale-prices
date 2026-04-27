import { createScraper } from "./_factory";

export default createScraper({
  id: "ableton",
  name: "Ableton Live",
  vendor: "Ableton",
  productUrl: "https://www.ableton.com/ja/shop/live/",
  editions: [
    { name: "Suite", keywords: ["Suite"], fallbackJpy: 80800 },
    { name: "Standard", keywords: ["Standard"], fallbackJpy: 50800 },
    { name: "Intro", keywords: ["Intro"], fallbackJpy: 10800 },
  ],
});
