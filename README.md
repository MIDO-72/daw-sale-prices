# DAW-SALE

主要 DAW (Cubase / Ableton Live / Logic Pro / FL Studio / Pro Tools / Studio One / Bitwig / Reaper / Reason / Cakewalk / Digital Performer / Ardour / LUNA / Waveform / Mixcraft / GarageBand) の現時点の価格 (日本円) を一覧表示する Next.js 静的サイト。

価格は各社公式ページからスクレイピングし、GitHub Actions で 1 日 2 回 (09:00 / 21:00 JST) 自動更新します。

## ローカル開発

```bash
npm install
npm run scrape   # data/prices.json を生成・更新
npm run dev      # http://localhost:3000
npm run build    # out/ に静的サイトを書き出し (output: 'export')
```

## 自動更新の有効化

1. このリポジトリを GitHub に push する。
2. リポジトリの Settings → Actions → General → "Workflow permissions" で "Read and write permissions" を有効化。
3. Actions タブから `Scrape DAW prices` ワークフローを `Run workflow` で手動実行し、`data/prices.json` の自動コミットが入ることを確認。
4. 以後は cron で 1 日 2 回自動実行されます。

## 配信 (任意)

`out/` を任意の静的ホスティング (GitHub Pages / Cloudflare Pages / Vercel / Netlify) に置くだけ。GitHub Pages を使う場合は別途デプロイ用ワークフローを追加してください。

## スクレイパの追加・修正

- `scripts/scrapers/<id>.ts` に DAW を 1 つずつ定義
- ベース価格 (`fallbackJpy`) は「自動取得に失敗した場合に表示する公式参照価格」
- 取得ロジックは `scripts/scrapers/_priceScan.ts` のヒューリスティック (キーワード近傍の `¥XX,XXX` を抽出) を使用
- HTML 構造変更でスクレイパが壊れた場合、該当 DAW のキーワードや fallback を更新

## 注意

- 表示価格は参考情報です。購入前に必ず公式サイトで最終確認してください。
- アップグレード版・クロスグレード・セール価格は対象外。新規購入の通常版価格のみ。
- スクレイピング対象サイトの robots.txt / 利用規約を尊重し、商用利用しないでください。
