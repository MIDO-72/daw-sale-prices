import { createScraper } from "./_factory";

export default createScraper({
  id: "reason",
  name: "Reason",
  vendor: "Reason Studios",
  productUrl: "https://www.reasonstudios.com/ja/shop/reason/",
  editions: [
    { name: "Reason 13 (買い切り)", keywords: ["Reason"], fallbackJpy: 65000 },
    { name: "Reason+ (年間サブスク)", keywords: ["Reason+"], fallbackJpy: 30000 },
  ],
});
