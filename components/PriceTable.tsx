import type { PricesFile } from "@/lib/types";

const fmtJpy = (n: number | null) =>
  n === null ? "—" : n === 0 ? "¥0" : `¥${n.toLocaleString("ja-JP")}`;

export function PriceTable({ data }: { data: PricesFile }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-800">
      <table className="w-full text-sm">
        <thead className="bg-neutral-100 dark:bg-neutral-900">
          <tr className="text-left">
            <th className="px-4 py-3 font-medium">DAW</th>
            <th className="px-4 py-3 font-medium">ベンダー</th>
            <th className="px-4 py-3 font-medium">エディション</th>
            <th className="px-4 py-3 font-medium text-right">価格 (JPY)</th>
            <th className="px-4 py-3 font-medium">備考</th>
            <th className="px-4 py-3 font-medium">ソース</th>
          </tr>
        </thead>
        <tbody>
          {data.daws.flatMap((d) =>
            d.editions.map((e, i) => (
              <tr
                key={`${d.id}-${i}`}
                className="border-t border-neutral-200 dark:border-neutral-800"
              >
                {i === 0 ? (
                  <td
                    className="px-4 py-3 font-medium align-top"
                    rowSpan={d.editions.length}
                  >
                    {d.name}
                    {d.error && (
                      <div className="mt-1 text-xs text-amber-700 dark:text-amber-400">
                        {d.error}
                      </div>
                    )}
                  </td>
                ) : null}
                {i === 0 ? (
                  <td
                    className="px-4 py-3 text-neutral-600 dark:text-neutral-400 align-top"
                    rowSpan={d.editions.length}
                  >
                    {d.vendor}
                  </td>
                ) : null}
                <td className="px-4 py-3">{e.name}</td>
                <td className="px-4 py-3 text-right tabular-nums">
                  {fmtJpy(e.priceJpy)}
                </td>
                <td className="px-4 py-3 text-xs text-neutral-600 dark:text-neutral-400">
                  {e.note ?? ""}
                </td>
                <td className="px-4 py-3">
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    公式
                  </a>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
