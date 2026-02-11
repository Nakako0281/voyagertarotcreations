# Voyager Tarot Creations Website Design Document
**Ver 1.0 (2026/02/08)**

## 1. プロジェクト概要 (Project Overview)
**目的:**
現行サイトの契約満了に伴うリニューアル。
コンテンツ（文章）は既存の内容を維持しつつ、「明るさ」「透明感」「信頼感」を表現するデザインへ刷新し、ユーザー体験を向上させる。

**ターゲット:**
*   ボイジャータロットを学びたい方（プロ志向・趣味志向）
*   人生の悩みや課題を解決したい女性
*   新しい自分を発見したい方

**納期:** 2026年3月13日（絶対厳守）

## 2. デザインコンセプト (Design Concept)
**テーマ: "Crystal Brightness" (クリスタルの輝き)**
純粋な白を基調とし、透明感のあるガラスのような質感（グラスモーフィズム）と、鮮やかなアクセントカラー（サクラピンク・サンシャインオレンジ）を組み合わせたデザイン。

### 2-1. カラーパレット (Color Palette)
*   **Base (背景)**:
    *   `#ffffff` (Pure White) - メイン背景
    *   `#fffdfc` (Warm White) - コンテンツエリア背景
*   **Text (文字)**:
    *   `#1f1f1f` - メインテキスト（視認性の高いダークグレー）
    *   `#4a4a4a` - 本文
    *   `#888888` - 補足テキスト
*   **Accent (アクセント)**:
    *   `#ff80ab` (Sakura Vivid) - メインアクセント、リンク、強調
    *   `#ffb300` (Sunshine) - 活気、ポジティブな印象
    *   `#4fc3f7` (Sky) - 清潔感、知性
    *   `#69f0ae` (Mint) - 癒やし、成長

### 2-2. タイポグラフィ (Typography)
*   **見出し (Heading)**: `Zen Maru Gothic` (Google Fonts)
    *   丸ゴシック体を使用し、親しみやすさと柔らかさを表現。
*   **本文 (Body)**: `Helvetica`, `Arial`, `Hiragino Sans`, `Meiryo`
    *   可読性の高いゴシック体。
*   **欧文 (English)**: `Zen Maru Gothic` または `Helvetica`

### 2-3. デザイン要素 (UI Elements)
*   **グラスモーフィズム**: 背景をぼかした半透明のカードデザイン（`backdrop-blur`）。
*   **シャドウ**: ピンク色の淡い影（`shadow-crystal`）を使用し、浮遊感を演出。
*   **スクロールバー**: 視覚的なノイズを減らすため、細身で薄いグレーのカスタムデザインを採用。
*   **インタラクション**: ボタンやカードにはホバー時に「ふわり」と浮き上がるアニメーションを適用。

---

## 3. サイト構造 (Site Structure)

### 3-1. サイトマップ
1.  **HOME (`/`)**: トップページ
    *   ヒーローセクション（ファーストビュー）
    *   Today's Voyager（タロット1枚引き体験）
    *   About（ボイジャータロットとは）
    *   Profile Preview（代表プロフィール概要）
    *   Course Preview（講座案内概要）
    *   News Preview（最新のお知らせ）
2.  **PROFILE (`/profile`)**: プロフィール詳細
    *   代表挨拶・経歴
    *   認定ティーチャー/コーチ/リーダー紹介（カルーセル表示）
3.  **COURSE (`/course`)**: 講座案内
    *   講座体系図
    *   各講座の詳細（認定講座、リーダー、コーチ、ティーチャー）
    *   価格・受講料
    *   申し込みフォームへの導線
4.  **NEWS (`/news`)**: お知らせ一覧
    *   更新情報のリスト表示
    *   カテゴリ別表示（MicroCMS連携）
5.  **NEWS DETAIL (`/news/[id]`)**: お知らせ詳細
    *   記事内容の表示
6.  **CONTACT (`/contact`)**: お問い合わせ
    *   お問い合わせフォーム（SSGform連携）
    *   個人セッション予約リンク（Reservia連携）

### 3-2. 共通レイアウト
*   **Header**:
    *   ロゴ、グローバルナビゲーション（PC/SP対応）。
    *   スクロール追従型。
*   **Sidebar (PCのみ)**:
    *   プロフィール写真、主要アクション（Personal Websiteリンク、Contactボタン）へのショートカット。
    *   ナビゲーションリンクは削除し、シンプル化。
    *   スクロールバー非表示（`scrollbar-hide`）。
*   **Footer**:
    *   コピーライト、サイトマップリンク、SNSリンク。

---

## 4. 機能仕様 (Functional Specs)

### 4-1. タロット1枚引き機能 (Today's Voyager)
*   **技術**: React Components (`TarotDraw.tsx`)
*   **動作**:
    1.  「カードを引く」ボタンクリック。
    2.  78枚のカードからランダムに1枚選出。
    3.  カード裏面のアニメーション後、表面を表示。
    4.  カード画像とキーワードを表示。
*   **目的**: ユーザーの滞在時間向上、ボイジャータロットへの興味喚起。

### 4-2. お問い合わせフォーム
*   **技術**: SSGform (外部フォームサービス)
*   **項目**: お名前、メールアドレス、件名（選択式）、メッセージ本文。
*   **遷移**: 入力 → 送信 → サンクスページ (`/contact/thanks`)。
*   **スパム対策**: SSGform標準機能（必要に応じてGoogle reCAPTCHA連携可）。

### 4-3. 予約システム連携
*   **技術**: freee予約 (Reservia - 外部SaaS)
*   **導線**:
    *   講座申し込みボタン (`/course`)
    *   個人セッション予約リンク (`/contact`, Sidebar)
*   **仕様**: ボタンクリックで外部サイトへ遷移させる。

### 4-4. コンテンツ管理 (CMS)
*   **技術**: MicroCMS
*   **管理対象**:
    *   おしゃれ（News）：タイトル、本文、日付、カテゴリ、アイキャッチ。
    *   （将来拡張）プロフィール情報、講座情報なども管理可能。

---

## 5. 技術スタック (Tech Stack)

| カテゴリ | 技術・ツール | 選定理由 |
| :--- | :--- | :--- |
| **フレームワーク** | **Astro** | 静的サイト生成(SSG)による高速表示、SEO対策。 |
| **UIライブラリ** | **React** | タロット引きやスライダーなどの動的UI構築。 |
| **スタイリング** | **Tailwind CSS** | 開発効率向上、デザインの一貫性維持。 |
| **CMS** | **MicroCMS** | 日本語対応、ヘッドレスCMSとしての使いやすさ。 |
| **Hosting** | **Firebase Hosting** | 高速なCDN、Googleインフラの安定性、無料枠の充実。 |
| **フォーム** | **SSGform** | 静的サイトでのフォーム実装の手軽さ。 |
| **予約システム** | **freee予約 (Reservia)** | 既存運用サービスの継続利用。 |

---

## 6. 環境構築・デプロイ手順

### 6-1. 開発環境 (Local)
```bash
# プロジェクトのクローン
git clone [repository-url]

# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev
# -> http://localhost:4321
```

### 6-2. ビルド & デプロイ (Deploy)
```bash
# 本番用ビルド
npm run build

# Firebaseへデプロイ
firebase deploy
```

---

## 7. ディレクトリ構造 (Directory Structure)

```
/
├── public/              # 静的アセット (画像, favicon)
├── src/
│   ├── components/      # 再利用可能なUIコンポーネント
│   │   ├── react/       # Reactコンポーネント (TarotDraw, Carousel)
│   │   └── ...          # Astroコンポーネント (Header, Footer, Sidebar)
│   ├── layouts/         # ページレイアウト (Layout.astro)
│   ├── library/         # 外部API連携ロジック (microcms.ts)
│   ├── pages/           # ページルーティング (index, contact, etc.)
│   └── styles/          # グローバルスタイル (global.css)
├── firebase.json        # Firebase設定
├── astro.config.mjs     # Astro設定
└── tailwind.config.mjs  # Tailwind設定 (テーマカラー定義)
```
