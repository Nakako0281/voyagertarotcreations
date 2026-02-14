# MicroCMS & SSGform 導入・設定ガイド

このHPに「ブログ・お知らせ機能（MicroCMS）」と「お問い合わせフォーム（SSGform）」を実装するための、今後の手順をまとめました。

## 1. MicroCMSの設定（お知らせ・プロフィール・講座情報）

現在、コード上では既にMicroCMSとの連携準備が整っています（`src/library/microcms.ts`）。
以下の手順でMicroCMS側のサービスとAPIを作成し、環境変数を設定するだけで連携が開始されます。

### 手順

1. **MicroCMSアカウント作成 & サービス作成**
   - [MicroCMS公式サイト](https://microcms.io/)でアカウントを作成します。
   - 新しいサービスを作成します（例: `voyager-tarot`）。
     - **サービスID**（サブドメイン）は後で使用します。

2. **APIの作成**
   以下の3つのAPIを作成してください。APIのエンドポイント名はコードに合わせて正確に設定する必要があります。

   | API名 | エンドポイント | APIの型 | 推奨スキーマ構成（フィールドID: データ型） |
   | :--- | :--- | :--- | :--- |
   | **News** | `news` | リスト形式 | `title` (テキスト), `content` (リッチエディタ), `category` (セレクト/参照※), `eyecatch` (画像) |
   | **Members** | `members` | リスト形式 | `name` (テキスト), `role` (テキスト), `titleEn` (テキスト), `image` (画像), `introduction` (テキストエリア), `qualifications` (繰り返しフィールド/テキスト) |
   
   > **※注意**: `category`（カテゴリー）などは、別途「カテゴリーAPI」を作って参照させるか、セレクトフィールドで「お知らせ」「ブログ」などを選択肢として登録します。コード上では `{ id: string, name: string }` の形を期待しています。

3. **APIキーの取得**
   - 管理画面の「API設定」または「権限管理」から、**APIキー**を取得します。

4. **環境変数の設定**
   - プロジェクト直下に `.env` ファイルを作成し（`.env.example`があればコピー）、以下の情報を記述します。
   - ※`.gitignore` に `.env` が含まれていることを確認し、APIキーが公開リポジトリに上がらないようにしてください。

   ```env
   MICROCMS_SERVICE_DOMAIN=あなたのサービスID (例: voyager-tarot)
   MICROCMS_API_KEY=取得したAPIキー
   ```

5. **動作確認**
   - ローカルサーバーを再起動（`npm run dev`）し、MicroCMSに入力したデータが「News」や「Profile」ページに反映されるか確認します。

---

## 2. SSGformの設定（お問い合わせフォーム）

お問い合わせフォームには [SSGform](https://ssgform.com/) などの外部フォームサービスを利用する構成になっています。

### 手順

1. **SSGformアカウント作成**
   - [SSGform](https://ssgform.com/)（または類似のサービス）に登録します。

2. **フォームの作成**
   - 管理画面で新しいフォームを作成します。
   - 転送先メールアドレスなどを設定します。

3. **エンドポイントURLの取得**
   - 作成したフォームの「Action URL（送信先URL）」をコピーします。例: `https://ssgform.com/s/xxxxxxxx`

4. **コードへの反映**
   - `src/pages/contact.astro` ファイルを開きます。
   - 21行目付近の `action` 属性を、取得したURLに書き換えます。

   ```html
   <!-- 変更前 -->
   <form action="YOUR_SSGFORM_URL" method="post" class="space-y-8">

   <!-- 変更後（例） -->
   <form action="https://ssgform.com/s/あなたのID" method="post" class="space-y-8">
   ```

5. **送信テスト**
   - ローカル環境または本番環境で実際にフォームに入力し、送信してメールが届くか確認します。
