import { createScraper } from "./_factory";

export default createScraper({
  id: "flstudio",
  name: "FL Studio",
  vendor: "Image-Line",
  productUrl: "https://www.image-line.com/fl-studio/compare-editions/",
  editions: [
    { name: "All Plugins Edition", keywords: ["All Plugins"], fallbackJpy: 73700 },
    { name: "Producer Edition", keywords: ["Producer"], fallbackJpy: 36300 },
    { name: "Signature Bundle", keywords: ["Signature"], fallbackJpy: 47300 },
    { name: "Fruity Edition", keywords: ["Fruity"], fallbackJpy: 18700 },
  ],
});
