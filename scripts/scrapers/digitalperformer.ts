import { createScraper } from "./_factory";

export default createScraper({
  id: "digitalperformer",
  name: "Digital Performer",
  vendor: "MOTU",
  productUrl: "https://h-resolution.com/product/motu/digital_performer11/",
  editions: [
    { name: "DP11", keywords: ["Digital Performer", "DP"], fallbackJpy: 76780 },
  ],
});
