# MicroCMS & SSGform 導入・設定ガイド

このHPに「ブログ・お知らせ機能（MicroCMS）」と「お問い合わせフォーム（SSGform）」を実装するための手順です。
アカウントの管理権限（所有権）を明確にするため、**アカウント作成はクライアント様（Webサイトの所有者様）**にお願いし、**実装・設定を開発者**が行う流れを推奨しています。

---

## 1. 【クライアント様作業】アカウント作成と招待

以下の2つのサービスでアカウントを作成し、開発者を招待（または共有）してください。

### ① MicroCMS（ブログ・お知らせ管理）
1. [MicroCMS公式サイト](https://microcms.io/)にアクセスし、アカウントを作成してください。
2. 管理画面に入り、「サービスを作成」します（サービス名: `Voyager Tarot` など）。
   - **サービスID**（例: `voyager-tarot`）はWebサイトのURLの一部になります。
3. サービスが作成できたら、左メニューの「メンバー管理」→「招待」をクリックします。
4. 開発者のメールアドレスを入力し、**「管理者」**権限（APIやスキーマ設定のため）で招待してください。

### ② SSGform（お問い合わせフォーム機能）
1. [SSGform](https://ssgform.com/)（またはご利用予定のメールフォームサービス）のアカウントを作成してください。
2. 新しいフォームを作成し、**「送信先メールアドレス」**にご自身のメールアドレス（お問い合わせを受け取りたいアドレス）を設定してください。
3. 発行された「Action URL（送信先URL）」をコピーし、開発者にお伝えください。
   - 例: `https://ssgform.com/s/xxxxxxxx`

---

## 2. 【開発者作業】API設定と組み込み

クライアント様から招待・共有を受けたら、以下の実装を行います。

### 1. MicroCMSのAPI設定
MicroCMSの管理画面で以下の3つのAPIを作成・設定します。

| API名 | エンドポイント | APIの型 | 推奨スキーマ構成 |
| :--- | :--- | :--- | :--- |
| **News** | `news` | リスト形式 | `title` (テキスト), `content` (リッチエディタ), `category` (セレクト), `eyecatch` (画像) |
| **Members** | `members` | リスト形式 | `name` (テキスト), `role` (テキスト), `titleEn` (テキスト), `image` (画像), `introduction` (テキストエリア), `qualifications` (繰り返し/テキスト) |
| **Courses** | `courses` | リスト形式 | `title`, `subTitle`, `slug` etc... (※必要に応じて実装) |

> **Tech Note**: `src/library/microcms.ts` の型定義に合わせてフィールドIDを設定してください。

### 2. 環境変数の設定 (.env)
プロジェクトルートに `.env` ファイルを作成し、APIキーを設定します。

```env
MICROCMS_SERVICE_DOMAIN=voyager-tarot  <-- クライアントが設定したサービスID
MICROCMS_API_KEY=xxxxxxxxxxxxxxx      <-- API設定から取得したキー
```

### 3. お問い合わせフォームの実装
`src/pages/contact.astro` のフォームAction URLを更新します。

```html
<!-- src/pages/contact.astro -->
<form action="クライアントから受領したSSGformのURL" method="post" ...>
```

### 4. 動作確認
`npm run dev` でローカルサーバーを起動し、
- `/news` にお知らせが表示されるか
- `/profile` にメンバー情報が表示されるか
- `/contact` から送信してメールが届くか
を確認します。
