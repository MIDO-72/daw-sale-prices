import { createScraper } from "./_factory";

export default createScraper({
  id: "ardour",
  name: "Ardour",
  vendor: "Ardour Community",
  productUrl: "https://ardour.org/download.html",
  editions: [
    { name: "ソースビルド", keywords: ["Ardour"], fallbackJpy: 0, note: "無料 (寄付制)" },
    { name: "公式バイナリ (1ヶ月)", keywords: ["1"], fallbackJpy: 150, note: "$1〜任意 / 月" },
  ],
  scrape: false,
});
