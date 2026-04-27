import type { CheerioAPI } from "cheerio";

// Heuristically scan the page for prices near edition keywords.
// Looks for ¥XX,XXX patterns within DOM nodes whose text mentions a keyword.
export function scanPriceNearKeyword(
  $: CheerioAPI,
  keywords: string[]
): number | null {
  const yenRe = /[¥￥]\s*([0-9]{1,3}(?:,[0-9]{3})+|[0-9]{4,7})/;
  let best: number | null = null;
  $("*").each((_, el) => {
    const text = $(el).text();
    if (!text || text.length > 400) return;
    const lower = text.toLowerCase();
    if (!keywords.some((k) => lower.includes(k.toLowerCase()))) return;
    const m = text.match(yenRe);
    if (!m) return;
    const n = Number(m[1].replace(/,/g, ""));
    if (!Number.isFinite(n)) return;
    if (n < 1000 || n > 500000) return;
    if (best === null || n < best) best = n;
  });
  return best;
}
