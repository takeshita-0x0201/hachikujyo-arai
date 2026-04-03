# WordPress テクニカル解析レポート

**対象サイト**: https://www.hachikujyo-arai.com/（蜂駆除あらい）  
**分析日**: 2026-04-02  
**ソース**: All-in-One WP Migration エクスポートファイル（97MB / 3,272ファイル）

---

## 1. WordPress環境サマリー

| 項目 | 値 |
|------|-----|
| WordPress | 6.x（6.9.4へのアップデート通知あり） |
| テーマ | EPRESS theme v1.5.0（iflag社製カスタムテーマ） |
| テンプレートエンジン | Laravel Blade for WordPress v0.3.7 |
| データベース | MariaDB |
| サイトURL | https://www.hachikujyo-arai.com |
| blogname | 蜂駆除 あらい |
| blogdescription | 蜂駆除は「あらい」、誠実・親切に対応いたします！ |
| プラグイン数 | 10個 |
| 投稿数 | 28件（公開） |
| 固定ページ数 | 9件（公開） + 4件（非公開） |
| メディアファイル | 約479ファイル（サムネイル含む） |

---

## 2. 重大なバグ・問題の発見

### BUG-1: titleタグが空になるバグ（★★★★★ 致命的）

**ファイル**: `view/header.php` 7行目

```php
// 現在のコード（バグ）
<title><?php wp_get_document_title(); ?></title>

// 正しいコード
<title><?php echo wp_get_document_title(); ?></title>
```

`wp_get_document_title()` は値を**返す**関数だが、`echo` がないため出力されない。
ただし9行目の `wp_head()` 経由でAIOSEOがtitleを出力している可能性がある。
いずれにしても`<title>`タグが重複する or 空になるリスクがある。

**→ Googleに3ページしかインデックスされない最大の原因の可能性あり**

---

### BUG-2: 電話番号の不一致（★★★★ 重大）

サイト内で2つの電話番号が混在している:

| 場所 | 電話番号 | tap-to-call |
|------|---------|:-----------:|
| PCヘッダー（`header.php` 92行目） | `090-8451-0837` | **なし（テキストのみ）** |
| SPヘッダー電話アイコン（`header.php` 109行目） | `080-3935-2300` | あり |
| 下層CTA（`master.php` 72行目） | `090-8451-0837` | あり |
| 構造化データ LocalBusiness（DB `org_baseTel`） | `080-3935-2300` | - |

**問題点**:
- PCヘッダーの電話番号がクリッカブルでない（tap-to-callなし）
- SPヘッダーと下層CTAで異なる電話番号
- 構造化データの電話番号がヘッダーと不一致
- **NAP（Name/Address/Phone）の不一致はローカルSEOに悪影響**

---

### BUG-3: All in One SEO v3.6.2は旧バージョン（★★★ 注意）

- 現在のAIOSEOはv4系に大幅リニューアル済み
- v3系はセキュリティパッチが提供されない可能性
- v4系への移行で設定が引き継がれない項目がある

---

### BUG-4: Google Analytics / Search Console が未設定（★★★★★ 致命的）

AIOSEOの設定値から確認:
```
aiosp_google_analytics_id: ""（空）
aiosp_google_verify: ""（空）
```

→ GA/GSC/GTMが一切入っていない。計測基盤がゼロ。

---

### BUG-5: XSSリスク（★★ 低）

**ファイル**: `view/header.php` 19行目
```php
location = '//<?= $_SERVER['HTTP_HOST'] ?>/thanks';
```
`$_SERVER['HTTP_HOST']` がエスケープなしで出力されている。

---

## 3. テーマ構造の詳細

### 3-1. ファイル構成

```
themes/hachikujyo-arai.com_theme/
├── front-page.php          # トップページ（11行）
├── page.php                # 固定ページ共通
├── single.php              # 投稿詳細
├── single/
│   └── single-default.php  # デフォルト投稿テンプレート
├── archive.php             # アーカイブ一覧
├── 404.php                 # 404ページ
├── search.php              # 検索結果
├── author.php              # 著者ページ
├── index.php               # フォールバック
├── functions.php           # 関数読み込み（9行）
├── style.css               # テーマ情報宣言
│
├── view/                   # 共通パーツ
│   ├── header.php          # HTMLヘッド + ヘッダー（118行）★重要
│   ├── footer.php          # フッター（57行）★重要
│   ├── master.php          # 下層ページ共通レイアウト（97行）★重要
│   ├── sidebar.php         # サイドバー
│   └── sns.php             # SNSシェアボタン
│
├── functions/              # 機能定義
│   ├── __setting.php       # 本体設定（502行）★重要
│   ├── __default-data-setting.php  # 初期データ・schema設定
│   ├── __mediaUploads.php  # メディアアップロード
│   ├── _spam_filter.php    # スパムフィルタ
│   ├── module/
│   │   ├── baseinfo.php    # 構造化データ（LocalBusiness）★重要
│   │   ├── bread.php       # パンくずリスト + BreadcrumbList schema
│   │   ├── pagination.php  # ページネーション
│   │   ├── search.php      # 検索機能
│   │   └── sitemap.php     # HTMLサイトマップ
│   ├── custom/
│   │   ├── shortcode-news.php    # お知らせショートコード
│   │   ├── shortcode-rss.php     # RSSショートコード
│   │   ├── shortcode-sns.php     # SNSショートコード
│   │   └── subtitle-custom-fields.php  # サブタイトルACF
│   └── blade/              # Bladeテンプレートエンジン
│
├── assets/
│   ├── css/
│   │   ├── main.css        # メインCSS（6,161行）
│   │   └── vendor/common.css  # ベンダーCSS
│   └── js/
│       ├── main.js         # メインJS
│       └── vendor/         # jQuery, Slick, etc.
│
└── api/                    # API
    └── api.php
```

### 3-2. テンプレート処理フロー

```
リクエスト
  ├── トップページ → front-page.php
  │     └── @include('view.header') → the_content() → @include('view.footer')
  │
  ├── 固定ページ → page.php
  │     └── @layout('view.master')
  │           ├── view/header.php（HTML head + ヘッダーナビ）
  │           ├── H1 + パンくず + 2カラムレイアウト
  │           ├── お問い合わせCTAセクション
  │           └── view/footer.php
  │
  └── 投稿 → single.php
        └── カテゴリslugでテンプレート切替
              └── single/single-default.php → @layout('view.master')
```

### 3-3. テーマ設定値（`__setting.php` 先頭）

| 設定 | 値 | 意味 |
|------|-----|------|
| `flag_prallax` | `false` | パララックス効果なし |
| `flag_h1_subtitle` | `false` | H1にサブタイトルなし |
| `flag_menu_subtitle` | `false` | メニューにサブタイトルなし |
| `flag_column_under` | `2column` | 下層ページは2カラム |

### 3-4. レスポンシブ対応

**対応あり。** 主要ブレイクポイント:

| ブレイクポイント | 用途 |
|----------------|------|
| `768px` | メインのPC/SP切替 |
| `900px` | 一部レイアウト調整 |
| `1024px` | コンテナ幅切替 |
| `600px` | 小型SP対応 |

切替クラス: `.pc-only` / `.sp-only`（769px以上/768px以下で表示切替）

---

## 4. SEO実装の現状

### 4-1. titleタグ

| 項目 | 状態 | 問題点 |
|------|------|--------|
| 出力方法 | `header.php` 7行目 + AIOSEO | `echo` 漏れのバグ |
| フォーマット | `%page_title%`（サイト名なし） | サイト名が付加されない |
| サイト名削除 | `__setting.php` 460-468行目でフィルタ | 意図的にサイト名を除去 |
| 個別設定 | AIOSEOの`_aioseop_title`で各ページ個別 | 固定ページのみ設定済み |

**各ページの現在のtitle設定**:

| ページ | _aioseop_title | 評価 |
|--------|---------------|------|
| HOME | 蜂駆除あらい\|スズメバチ・アシナガバチ\|福岡県 | △ 「福岡 蜂駆除」の語順が弱い |
| 蜂駆除あらい | 蜂駆除あらい《料金表》 | ✗ 地域名なし |
| 店舗案内 | 蜂駆除あらい\|店舗案内\|24時間・年中無休・明朗会計 | ○ |
| よくある質問 | 蜂駆除・鍵交換のあらい\|よくある質問\|土・日曜日や夜間でも対応 | ○ |
| 料金（非公開） | 蜂駆除・鍵交換のあらい\|料金\|スズメバチ15,000～25,000円 | ○ 公開すべき |
| 作業の流れ（非公開） | 蜂駆除・鍵交換のあらい\|作業の流れ | △ 公開すべき |
| 事例紹介（非公開） | 蜂駆除・鍵交換のあらい\|事例紹介\|当店が駆除した現場の写真をご紹介 | ○ 公開すべき |
| お問い合わせ | 蜂駆除・鍵交換のあらい\|お問い合わせ\|お気軽にご相談ください | ○ |
| 鍵交換あらい | 鍵交換あらい | △ |
| ブログ記事（全28件） | **全て空** | ✗ 致命的 |

### 4-2. meta description

| ページ | _aioseop_description | 評価 |
|--------|---------------------|------|
| HOME | 「蜂駆除あらい」は地域密着で誠実に対応いたします。日々の安心を手に入れましょう！！ | ✗ 短い・キーワード不足 |
| 蜂駆除あらい | 蜂の巣駆除はアライまで!! | ✗ 短すぎる |
| 店舗案内 | 詳細な説明あり（160字以上） | ○ |
| よくある質問 | 詳細な説明あり | ○ |
| 料金（非公開） | 詳細な説明あり | ○ 公開すべき |
| 作業の流れ（非公開） | 詳細な説明あり | ○ 公開すべき |
| 事例紹介（非公開） | 詳細な説明あり | ○ 公開すべき |
| ブログ記事（全28件） | **全て空** | ✗ |

### 4-3. H1タグ

| ページ | H1の内容 | 実装場所 | 評価 |
|--------|---------|---------|------|
| トップページ | ロゴ画像（alt="蜂駆除 あらい"） | `header.php` 47-55行目 | ✗ テキストH1がない |
| 下層ページ | `wp_get_document_title()` の値 | `master.php` 24-29行目 | △ titleと同一 |

### 4-4. 構造化データ

| 種類 | 実装場所 | 出力条件 |
|------|---------|---------|
| **LocalBusiness** | `baseinfo.php` 73-91行目 | 全ページ |
| **BreadcrumbList** | `bread.php` 78-109行目 | トップ以外の全ページ |
| **FAQPage** | なし | ✗ 未実装 |

**LocalBusinessの出力内容**:
```json
{
  "@type": "LocalBusiness",
  "name": "蜂駆除あらい",
  "address": "〒814-0121 福岡県福岡市城南区神松寺2-14-4",
  "telephone": "080-3935-2300",
  "email": "info@hachikujyo-arai.com"
}
```

> **BUG-6: 構造化データの住所が間違っている（★★★★ 重大）**
>
> LocalBusinessの `address` が「福岡市城南区神松寺2-14-4」（〒814-0121）になっているが、
> 蜂駆除あらいの正しい住所は **「〒830-0001 福岡県久留米市小森野6丁目18-27」** である。
> 現行サイトの店舗概要（`/about`）には久留米市の住所が記載されており、構造化データと不一致が発生している。
> **NAP（Name/Address/Phone）の不一致はローカルSEOに深刻な悪影響を与えるため、即座に修正が必要。**
>
> **修正対象**: `functions/module/baseinfo.php` のLocalBusiness schemaの `address` フィールド、
> および DB の `org_baseAddress` 等の設定値。
>
> **BUG-7: master.php CTAセクションの住所が間違っている（★★★★ 重大）**
>
> `view/master.php` 82行目付近のCTAセクション（店舗名・住所・営業時間を表示する部分）でも、
> 住所が「福岡市城南区神松寺2-14-4」のまま残っている。
> 正しくは「〒830-0001 福岡県久留米市小森野6丁目18-27」に修正する必要がある。
> 構造化データ（BUG-6）とCTAセクション（BUG-7）の両方を修正し、サイト全体でNAPを統一すること。

### 4-5. canonicalタグ

AIOSEOの設定で `aiosp_can: on`（有効）。プラグイン経由で自動出力。

### 4-6. OGPタグ

AIOSEOの設定で `aiosp_opengraph_setmeta: on`（有効）。
デフォルトOGP画像: `/wp-content/uploads/logo_ogp_20220105.jpg`

### 4-7. robots/noindex設定

- サンクスページ: `header.php` 23行目で `<meta name="robots" content="noindex">`
- 日付アーカイブ: AIOSEOで `aiosp_archive_date_noindex: on`
- 著者アーカイブ: AIOSEOで `aiosp_archive_author_noindex: on`

---

## 5. CTA・コンバージョン導線の詳細

### 5-1. 電話番号の配置

```
┌─────────────────────────────────────────────┐
│ PC ヘッダー (header.php 84-101行目)          │
│  ┌─────────────────────────────────────────┐│
│  │ 「各種クレジットカード利用可」             ││
│  │ 24時間・年中無休                          ││
│  │ TEL 090-8451-0837 ← テキストのみ(tap不可) ││
│  │ [お問い合わせバナー画像] → /contact        ││
│  └─────────────────────────────────────────┘│
│                                             │
│ SP ヘッダー (header.php 103-112行目)         │
│  ┌──────────────────────┐                   │
│  │ [メール] → /contact   │                   │
│  │ [電話] → tel:08039352300 ← 別の番号！     │
│  └──────────────────────┘                   │
│                                             │
│ 下層CTA (master.php 62-93行目)               │
│  ┌─────────────────────────────────────────┐│
│  │ <h2>お問い合わせ</h2>                     ││
│  │ 「まずはお電話ください」                   ││
│  │ TEL 090-8451-0837 ← tap-to-call あり     ││
│  │ [お問い合わせフォームはこちら] → /contact   ││
│  │                                          ││
│  │ 店舗名 / 住所 / 営業時間 / 定休日         ││
│  └─────────────────────────────────────────┘│
│  ※ policy, contact, sitemap, thanksでは非表示 │
│                                             │
│ モバイル固定電話ボタン                        │
│  → 【未実装】                                │
└─────────────────────────────────────────────┘
```

### 5-2. CTAの問題点まとめ

| 問題 | 影響 | 修正箇所 |
|------|------|---------|
| PCヘッダーの電話がtap-to-callでない | PC/タブレットで電話できない | `header.php` 92行目 |
| SP/PCで異なる電話番号 | ユーザーの混乱・NAP不一致 | `header.php` 109行目 |
| モバイル固定電話ボタンがない | 電話CV 40-60%の損失 | `footer.php` に追加 |
| トップページにCTAが本文内のみ | CTA到達前に離脱 | `front-page.php` 修正 |
| 下層CTAがページ最下部のみ | 途中離脱時にCTAが見えない | 中間CTAの追加 |

---

## 6. ページ一覧（全コンテンツ）

### 6-1. 固定ページ（公開中 9ページ）

| ID | ページ名 | slug | 用途 |
|----|---------|------|------|
| 13 | HOME | `home` | トップページ |
| 261 | 蜂駆除あらい | `bee` | 蜂駆除サービス・料金表 |
| 257 | 鍵交換あらい | `key` | 鍵交換サービス |
| 16 | 店舗案内 | `about` | 会社概要 |
| 20 | よくある質問 | `faq` | FAQ（3問） |
| 11 | お問い合わせ | `contact` | 問い合わせフォーム（CF7） |
| 14 | プライバシーポリシー | `policy` | 個人情報保護方針 |
| 15 | サイトマップ | `sitemap` | HTMLサイトマップ |
| 12 | お問い合わせありがとうございました | `thanks` | サンクスページ（noindex） |

### 6-2. 固定ページ（非公開 4ページ）★要注目

| ID | ページ名 | slug | AIOSEO title | 状態 |
|----|---------|------|-------------|------|
| 22 | **料金** | `fee` | 蜂駆除・鍵交換のあらい\|料金\|スズメバチ15,000～25,000円 | **private** |
| 24 | **作業の流れ** | `flow` | 蜂駆除・鍵交換のあらい\|作業の流れ | **private** |
| 18 | **事例紹介** | `case` | 蜂駆除・鍵交換のあらい\|事例紹介 | **private** |
| 259 | **ガラス交換あらい** | `glass` | ガラス交換あらい | **private** |

→ **料金・作業の流れ・事例紹介は公開するだけでコンテンツ量が一気に増える！**
→ 事例紹介ページは施工事例の受け皿として即活用可能。
→ 料金ページ（fee）と蜂駆除ページ（bee）で料金情報が重複 → 統合を検討。

### 6-3. ブログ投稿（公開中 28件）

代表的な投稿:

| ID | タイトル | 投稿日 | SEO設定 |
|----|---------|--------|--------|
| 519 | ※安すぎるネット広告に要注意※ | 2025-09 | title/desc **空** |
| 516 | ※TVでも注意喚起がありました※ | 2025-08 | title/desc **空** |
| 512 | ◆ご依頼増えています！！◆ | 2025-07 | title/desc **空** |
| 449 | ※要注意※ 今年の夏は蜂が多く出る予感！！ | 2025-07 | title/desc **空** |
| 145 | 蜂の活動時期 スズメバチ・アシナガバチ | 2021-06 | title/desc **空** |
| ... | （以下、2020〜2022年の施工実績記事20件超） | - | **全て空** |

→ **ブログ記事28件すべてでAIOSEOのtitle/descriptionが空**。
→ SEO的には存在しないに等しい。これが39ページ中3ページしかインデックスされない原因の一つ。

---

## 7. プラグイン一覧と役割

| プラグイン | バージョン | 役割 | 状態 |
|-----------|-----------|------|------|
| **All in One SEO Pack** | 3.6.2 | SEO管理全般 | ⚠ 旧バージョン |
| **Contact Form 7** | - | 問い合わせフォーム | ○ |
| **Advanced Custom Fields** | - | サブタイトル等のカスタムフィールド | ○ |
| **Classic Editor** | - | クラシックエディタ | ○ |
| **Akismet** | - | スパム対策 | ○ |
| **Media Library Assistant** | - | メディア管理 | ○ |
| **Redirection** | - | リダイレクト管理 | ⚠ 未セットアップ |
| **Safe SVG** | - | SVGアップロード対応 | ○ |
| **WP Fastest Cache** | - | キャッシュ最適化 | ○ |
| **WP Mail SMTP** | - | メール送信 | ○ |

**注意**: DBの `active_plugins` が空配列（`a:0:{}`）になっている。
エクスポート時にリセットされた可能性あり。サイト上では有効化されている。

---

## 8. メディアファイル

### 8-1. 主要画像

| カテゴリ | ファイル | 用途 |
|---------|---------|------|
| ロゴ | `logo.svg` | サイトロゴ（SVG） |
| OGP | `logo_ogp_20220105.jpg` | SNSシェア時の画像 |
| GBP | `logo_gmb.png` | Googleビジネスプロフィール用 |
| メインビジュアルPC | `image1.jpg`, `image2.jpg`, `image3.jpg` | トップスライダー |
| メインビジュアルSP | `sp_image1.jpg`, `sp_image2.jpg`, `sp_image3.jpg` | SP用スライダー |
| キャッチコピー | `20230518_001.jpg`, `main_copy1.png` | メインコピー画像 |
| ヘッダーUI | `hdr_img001.png` | お問い合わせバナー |
| SP電話/メール | `sp_tel.png`, `sp_mail.png` | SPヘッダーアイコン |
| 施工事例写真 | `77769_0.jpg` 〜 `78045_0.jpg` 等 | 駆除現場写真（約60枚） |
| ページ画像 | `about_img001.jpg`, `faq_img001.jpg` 等 | 各ページ用 |

### 8-2. 施工事例写真の存在

uploadsフォルダに**駆除現場の写真が約60枚**存在する。
→ 施工事例ページ（現在非公開）のコンテンツとして即活用可能。

---

## 9. 改修ポイント詳細（ファイル・行番号付き）

### 9-1. titleタグの修正

| 対象 | ファイル | 行番号 | 修正内容 |
|------|---------|--------|---------|
| echoバグ修正 | `view/header.php` | 7行目 | `echo` を追加、またはこの行を削除して`wp_head()`に任せる |
| サイト名付加 | `functions/__setting.php` | 460-468行目 | `edit_document_title` フィルタでサイト名削除を止める |
| 個別title | AIOSEO管理画面 | - | 各ページの`_aioseop_title`を最適化 |
| ブログ記事title | AIOSEO管理画面 | - | 28件すべてに個別titleを設定 |

### 9-2. meta descriptionの修正

| 対象 | 方法 |
|------|------|
| 固定ページ | AIOSEO管理画面で各ページの`_aioseop_description`を編集 |
| ブログ記事 | AIOSEO管理画面で28件すべてに個別descriptionを設定 |
| トップページ | AIOSEOのグローバル設定で`aiosp_home_description`を設定 |

### 9-3. H1タグの改善

| 対象 | ファイル | 修正内容 |
|------|---------|---------|
| トップページ | `front-page.php` | `<main>` 直後にテキストH1を追加 |
| 下層ページ | `view/master.php` 24-29行目 | 必要に応じてH1テキストをカスタマイズ |

### 9-4. モバイル固定電話ボタンの追加

**追加先**: `view/footer.php` の `</footer>` 直前（48行目付近）

```html
<!-- モバイル固定電話ボタン -->
<div class="sp_fixed_cta sp-only">
  <a href="tel:090-8451-0837" class="sp_fixed_tel_btn">
    <span class="sp_fixed_icon">📞</span>
    <span class="sp_fixed_text">今すぐ電話する</span>
  </a>
  <a href="/contact" class="sp_fixed_mail_btn">
    <span class="sp_fixed_icon">✉</span>
    <span class="sp_fixed_text">お問い合わせ</span>
  </a>
</div>
```

**CSS追加先**: `assets/css/main.css` 末尾

```css
/* モバイル固定CTA */
.sp_fixed_cta {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 9999;
}
.sp_fixed_tel_btn {
  flex: 1;
  background: #e53e3e;
  color: #fff;
  text-align: center;
  padding: 14px 0;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
}
.sp_fixed_mail_btn {
  flex: 1;
  background: #3182ce;
  color: #fff;
  text-align: center;
  padding: 14px 0;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
}
body { padding-bottom: 50px; }
@media (min-width: 769px) {
  .sp_fixed_cta { display: none; }
  body { padding-bottom: 0; }
}
```

### 9-5. 新しいページテンプレートの追加方法

テーマ直下に `page-{slug}.php` を作成:

```php
<?php
/*
Template Name: 地域別ページ
*/
?>
@layout('view.master')

@section('content')
  @wpposts
    {{the_content()}}
  @wpempty
  @wpend
@endsection
```

---

## 10. 電話番号の統一方針（要クライアント確認）

| 番号 | 現在の使われ方 | 推奨 |
|------|-------------|------|
| `090-8451-0837` | PCヘッダー、下層CTA、トップページ | **メインとして統一？** |
| `080-3935-2300` | SPヘッダー、構造化データ | **サブ or 廃止？** |

→ **クライアントにどちらをメインにするか確認が必要**。
→ 統一後、ヘッダー・CTA・構造化データ・GBP全てを同じ番号に揃える。

---

## 11. 即座に実行可能な改修一覧

### Phase 1: バグ修正 + SEO基礎（今すぐ）

| # | 改修 | ファイル | 工数 |
|---|------|---------|------|
| 1 | titleタグのechoバグ修正 | `view/header.php` 7行目 | 5分 |
| 2 | 電話番号の統一 | `header.php` 92, 109行目 + `baseinfo.php` DB | 30分 |
| 3 | PCヘッダーの電話をtap-to-call化 | `header.php` 92行目 | 5分 |
| 4 | トップページtitle最適化 | AIOSEO管理画面 | 10分 |
| 5 | 蜂駆除ページtitle最適化 | AIOSEO管理画面 | 10分 |
| 6 | 全ページmeta description最適化 | AIOSEO管理画面 | 1時間 |
| 7 | ブログ28件のtitle/desc設定 | AIOSEO管理画面 | 2時間 |
| 8 | GA4 + GTM設置 | `header.php` にコード追加 | 30分 |
| 9 | Search Console登録 + 認証 | AIOSEO設定 `aiosp_google_verify` | 15分 |

### Phase 2: CTA強化 + コンテンツ公開（1週間以内）

| # | 改修 | ファイル | 工数 |
|---|------|---------|------|
| 10 | モバイル固定電話ボタン追加 | `footer.php` + `main.css` | 1時間 |
| 11 | 非公開ページ3件を公開 | WP管理画面 | 30分 |
| 12 | トップページにテキストH1追加 | `front-page.php` | 30分 |
| 13 | トップページ再設計 | WP管理画面（コンテンツ編集） | 1日 |
| 14 | FAQ拡充 + FAQPage構造化データ | WP管理画面 + `baseinfo.php` | 半日 |

### Phase 3: コンテンツSEO（2週間以内）

| # | 改修 | 方法 | 工数 |
|---|------|------|------|
| 15 | 地域別ページ12ページ作成 | WP管理画面（固定ページ追加） | 1週間 |
| 16 | 蜂の種類別ページ3ページ作成 | WP管理画面（固定ページ追加） | 3日 |
| 17 | 施工事例ページ整備（写真60枚活用） | WP管理画面（事例紹介ページ公開+更新） | 2日 |

---

*テクニカル解析レポート作成: 2026-04-02*
