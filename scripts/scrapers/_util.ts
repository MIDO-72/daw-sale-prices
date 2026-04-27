import { request } from "undici";
import * as cheerio from "cheerio";

export const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";

export async function fetchHtml(url: string, timeoutMs = 15000): Promise<cheerio.CheerioAPI> {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    const res = await request(url, {
      headers: { "user-agent": UA, "accept-language": "ja,en;q=0.8" },
      signal: ac.signal,
      maxRedirections: 5,
    });
    if (res.statusCode >= 400) throw new Error(`HTTP ${res.statusCode}`);
    const body = await res.body.text();
    return cheerio.load(body);
  } finally {
    clearTimeout(t);
  }
}

export function parseJpy(text: string | undefined | null): number | null {
  if (!text) return null;
  const m = text.replace(/[\s,]/g, "").match(/([0-9]+)/);
  if (!m) return null;
  const n = Number(m[1]);
  return Number.isFinite(n) ? n : null;
}

export function nowIso(): string {
  return new Date().toISOString();
}
