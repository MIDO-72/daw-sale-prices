import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAW 現在価格",
  description: "主要 DAW (Cubase / Ableton Live / Logic Pro 等) の現在価格一覧",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}
