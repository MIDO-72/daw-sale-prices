import { createScraper } from "./_factory";

export default createScraper({
  id: "garageband",
  name: "GarageBand",
  vendor: "Apple",
  productUrl: "https://www.apple.com/jp/mac/garageband/",
  editions: [
    { name: "Mac/iOS", keywords: ["GarageBand"], fallbackJpy: 0, note: "無料 (Apple端末ユーザー)" },
  ],
  scrape: false,
});
