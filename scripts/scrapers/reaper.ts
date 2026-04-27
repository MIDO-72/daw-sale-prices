import { createScraper } from "./_factory";

export default createScraper({
  id: "reaper",
  name: "Reaper",
  vendor: "Cockos",
  productUrl: "https://www.reaper.fm/purchase.php",
  editions: [
    { name: "Discount License (個人/小規模)", keywords: ["Discount", "60"], fallbackJpy: 9300, note: "$60 換算" },
    { name: "Commercial License", keywords: ["Commercial", "225"], fallbackJpy: 35000, note: "$225 換算" },
  ],
});
