# ポートフォリオサイト

ORI のポートフォリオサイトです。

## 🌊 概要

Next.js 14 と Tailwind CSS を使用して構築された、モダンでレスポンシブなポートフォリオサイトです。クリーンで洗練されたデザインと、スムーズなユーザーエクスペリエンスを提供します。

## ✨ 特徴

- **モダンな技術スタック**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **レスポンシブデザイン**: すべてのデバイスで最適な表示
- **アニメーション**: Framer Motion による滑らかなアニメーション
- **SEO 最適化**: メタデータとオープングラフタグ
- **高速パフォーマンス**: Next.js の最適化機能を活用

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 14
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **フォント**: 日本語対応 Web フォント

## 📁 プロジェクト構造

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   ├── skills/
│   ├── projects/
│   ├── experience/
│   └── contact/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
├── public/
└── ...
```

## 🚀 セットアップ

### 前提条件

- Node.js 18 以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/furuyashikiiori/portfolio.git
cd portfolio

# 依存関係をインストール
npm install
# または
yarn install
```

### 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてサイトを確認できます。

## 📄 ページ構成

- **ホーム** (`/`) - ヒーローセクションと概要
- **自己紹介** (`/about`) - 詳細なプロフィール
- **スキル** (`/skills`) - 技術スキルと専門分野
- **プロジェクト** (`/projects`) - ポートフォリオ作品
- **経歴** (`/experience`) - 職歴・学歴・受賞歴
- **コンタクト** (`/contact`) - お問い合わせフォーム

## 🎨 カスタマイズ

### カラーパレット

水色を基調としたプロフェッショナルなカラーパレットを使用：

- **プライマリ**: `bg-cyan-500`, `text-cyan-600`
- **セカンダリ**: `bg-blue-500`, `text-blue-600`
- **アクセント**: `bg-teal-500`, `text-teal-600`

### コンテンツの編集

各ページのコンテンツは対応するページファイルで編集できます：

- 個人情報: `app/about/page.tsx`
- スキル情報: `app/skills/page.tsx`
- プロジェクト情報: `app/projects/page.tsx`
- 経歴情報: `app/experience/page.tsx`

## 🚀 デプロイ

### Vercel (推奨)

```bash
# Vercel CLIをインストール
npm i -g vercel

# デプロイ
vercel
```

### その他のプラットフォーム

- **Netlify**: ビルドコマンド `npm run build`
- **GitHub Pages**: GitHub Actions での自動デプロイ
- **AWS Amplify**: リポジトリ連携でのデプロイ

## 📱 レスポンシブ対応

- **デスクトップ**: 1024px 以上
- **タブレット**: 768px - 1023px
- **モバイル**: 767px 以下

## 🔧 開発

### ビルド

```bash
npm run build
```

### リント

```bash
npm run lint
```

### 型チェック

```bash
npm run type-check
```

## 📧 お問い合わせ

ご質問やご要望がございましたら、お気軽にお問い合わせください。

---

**作成者**: [古屋敷伊織]  
**作成日**: 2025 年 6 月  
**最終更新**: 2025 年 6 月
