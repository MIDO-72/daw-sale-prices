import { PriceTable } from "@/components/PriceTable";
import type { PricesFile } from "@/lib/types";
import data from "@/data/prices.json";

const prices = data as PricesFile;

const fmtUpdated = (iso: string) => {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}`;
};

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">DAW 現在価格</h1>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          主要 DAW の通常版 (新規購入) 価格を日本円で表示します。
          価格は各社公式ページから 1 日 2 回自動取得しています。アップグレード版・セール価格は含みません。
        </p>
        <p className="mt-2 text-xs text-neutral-500">
          最終更新: {fmtUpdated(prices.updatedAt)}
        </p>
      </header>
      <PriceTable data={prices} />
      <footer className="mt-8 text-xs text-neutral-500">
        表示価格は参考情報です。購入前に必ず公式サイトで最終確認してください。
      </footer>
    </main>
  );
}
