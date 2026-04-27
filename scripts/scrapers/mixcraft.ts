import { createScraper } from "./_factory";

export default createScraper({
  id: "mixcraft",
  name: "Mixcraft",
  vendor: "Acoustica",
  productUrl: "https://acoustica.com/mixcraft",
  editions: [
    { name: "Pro Studio 11", keywords: ["Pro Studio"], fallbackJpy: 32000, note: "$199.95 換算" },
    { name: "Recording Studio 11", keywords: ["Recording Studio"], fallbackJpy: 14000, note: "$89.95 換算" },
  ],
});
