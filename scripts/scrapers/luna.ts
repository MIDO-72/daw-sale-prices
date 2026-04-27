import { createScraper } from "./_factory";

export default createScraper({
  id: "luna",
  name: "LUNA",
  vendor: "Universal Audio",
  productUrl: "https://www.uaudio.jp/luna.html",
  editions: [
    { name: "LUNA Pro (年間サブスク)", keywords: ["Pro"], fallbackJpy: 30000 },
    { name: "LUNA (基本機能・無料)", keywords: ["LUNA"], fallbackJpy: 0, note: "無料" },
  ],
});
