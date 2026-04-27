import { createScraper } from "./_factory";

export default createScraper({
  id: "logic",
  name: "Logic Pro",
  vendor: "Apple",
  productUrl: "https://www.apple.com/jp/logic-pro/",
  editions: [
    { name: "Mac版 (買い切り)", keywords: ["Logic Pro"], fallbackJpy: 30000 },
    { name: "iPad版 (月額)", keywords: ["iPad"], fallbackJpy: 700, note: "月額 (年額7,000円)" },
  ],
});
