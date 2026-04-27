import type { Daw, Edition } from "../../lib/types";
import { fetchHtml, nowIso } from "./_util";
import { scanPriceNearKeyword } from "./_priceScan";

export type EditionSpec = {
  name: string;
  keywords: string[];
  url?: string;
  fallbackJpy: number | null;
  note?: string;
};

export type DawSpec = {
  id: string;
  name: string;
  vendor: string;
  productUrl: string;
  editions: EditionSpec[];
  scrape?: boolean; // if false, skip network and just return fallback
};

export function createScraper(spec: DawSpec): () => Promise<Daw> {
  return async () => {
    const fetchedAt = nowIso();
    const baseEditions: Edition[] = spec.editions.map((e) => ({
      name: e.name,
      priceJpy: e.fallbackJpy,
      url: e.url ?? spec.productUrl,
      note: e.note ?? (e.fallbackJpy !== null ? "公式参照価格(自動取得未確認)" : undefined),
    }));

    if (spec.scrape === false) {
      return {
        id: spec.id,
        name: spec.name,
        vendor: spec.vendor,
        productUrl: spec.productUrl,
        editions: baseEditions,
        fetchedAt,
      };
    }

    try {
      const $ = await fetchHtml(spec.productUrl);
      const editions: Edition[] = spec.editions.map((e, i) => {
        const scraped = scanPriceNearKeyword($, e.keywords);
        // Accept scraped value only when it's within plausible range of fallback
        // (50%-200%). Otherwise the heuristic likely picked up an unrelated price.
        if (
          scraped !== null &&
          e.fallbackJpy !== null &&
          e.fallbackJpy > 0 &&
          scraped >= e.fallbackJpy * 0.5 &&
          scraped <= e.fallbackJpy * 2
        ) {
          return { name: e.name, priceJpy: scraped, url: e.url ?? spec.productUrl };
        }
        return baseEditions[i];
      });
      const allMissed = editions.every(
        (e, i) => e.priceJpy === spec.editions[i].fallbackJpy
      );
      return {
        id: spec.id,
        name: spec.name,
        vendor: spec.vendor,
        productUrl: spec.productUrl,
        editions,
        fetchedAt,
        ...(allMissed && spec.editions.some((e) => e.fallbackJpy !== null)
          ? { error: "自動取得できず公式参照価格を表示" }
          : {}),
      };
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      return {
        id: spec.id,
        name: spec.name,
        vendor: spec.vendor,
        productUrl: spec.productUrl,
        editions: baseEditions,
        fetchedAt,
        error: `取得失敗: ${msg}`,
      };
    }
  };
}
