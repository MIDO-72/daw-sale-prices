import { createScraper } from "./_factory";

export default createScraper({
  id: "waveform",
  name: "Waveform",
  vendor: "Tracktion",
  productUrl: "https://www.tracktion.com/products/waveform-pro",
  editions: [
    { name: "Pro", keywords: ["Pro"], fallbackJpy: 18000, note: "$119 換算" },
    { name: "Free", keywords: ["Free"], fallbackJpy: 0, note: "無料" },
  ],
});
