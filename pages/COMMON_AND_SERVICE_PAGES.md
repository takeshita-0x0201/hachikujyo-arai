# 共通パーツ + サービスページ 詳細制作案

**対象サイト**: https://www.hachikujyo-arai.com/（蜂駆除あらい）  
**作成日**: 2026-04-02  
**コンセプト**: 「福岡市の蜂駆除屋あらいです。料金は全部お伝えします。」  
**統一電話番号**: 090-8451-0837（仮。クライアント確認後に決定）

---

## Part 1: 共通パーツ制作案

---

### 1-1. PCヘッダー

#### 現状の問題点

| 問題 | ファイル・行番号 | 影響 |
|------|---------------|------|
| 電話番号がtap-to-callでない（テキストのみ） | `view/header.php` 92行目 | PC/タブレットで電話発信できない |
| SPヘッダーの電話番号が別番号（080-3935-2300） | `view/header.php` 109行目 | NAP不一致 → ローカルSEO悪影響 |
| お問い合わせボタンが画像（hdr_img001.png） | `view/header.php` 96行目 | 読み込み遅延・変更しにくい |
| 「24時間対応」の訴求が弱い | `view/header.php` 91行目 | 差別化ポイントが目立たない |
| ロゴがH1なのはトップページのみ（正しい） | `view/header.php` 47行目 | OK（維持） |

#### 改修後のHTML構造案

**修正ファイル**: `view/header.php` 84〜101行目を以下に置換

```html
<div class="hdr_info_wrap pc-only">
  <div class="hdr_info">
    <!-- 信頼バッジ帯 -->
    <div class="hdr_badge_bar">
      <span class="badge">24時間365日対応</span>
      <span class="badge">年間実績多数</span>
      <span class="badge">各種クレジットカード利用可</span>
    </div>
    <!-- 電話エリア -->
    <div class="hdr_cta_area">
      <div class="hdr_tel_block">
        <p class="hdr_tel_label">蜂のトラブル、今すぐご相談ください</p>
        <a href="tel:09084510837" class="hdr_tel_number">
          <span class="hdr_tel_icon" aria-hidden="true">&#9742;</span>
          <span class="hdr_tel_num">090-8451-0837</span>
        </a>
        <p class="hdr_tel_note">通話無料相談・概算見積もりOK</p>
      </div>
      <div class="hdr_contact_block">
        <a href="/contact" class="hdr_contact_btn">
          <span class="hdr_contact_icon" aria-hidden="true">&#9993;</span>
          お問い合わせ
        </a>
      </div>
    </div>
  </div>
</div>
```

#### スティッキー（固定ヘッダー）について

**推奨: スティッキーにする（PCのみ）**

理由:
- 蜂駆除は「電話番号をいつでもタップできること」がCV直結
- 競合（蜂の巣駆除センター、緊急駆け付け隊）はヘッダー固定を採用
- ページ中盤〜下部をスクロール中でも電話番号が常時見える

**CSS追加**（`assets/css/main.css` 末尾に追加）:

```css
/* PCスティッキーヘッダー */
@media (min-width: 769px) {
  header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
}

/* ヘッダー信頼バッジ */
.hdr_badge_bar {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 4px 0;
  font-size: 12px;
}
.hdr_badge_bar .badge {
  background: #f0f4f8;
  color: #2d3748;
  padding: 2px 10px;
  border-radius: 3px;
  font-weight: 700;
}
.hdr_badge_bar .badge:first-child {
  background: #c53030;
  color: #fff;
}

/* ヘッダーCTAエリア */
.hdr_cta_area {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  padding: 8px 0;
}
.hdr_tel_label {
  font-size: 12px;
  color: #4a5568;
  margin: 0 0 2px;
}
.hdr_tel_number {
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: #c53030;
  font-size: 28px;
  font-weight: 900;
  font-family: "Helvetica Neue", Arial, sans-serif;
  letter-spacing: 1px;
}
.hdr_tel_icon {
  font-size: 24px;
}
.hdr_tel_note {
  font-size: 11px;
  color: #718096;
  margin: 2px 0 0;
}
.hdr_contact_btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #dd6b20;
  color: #fff;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 700;
  font-size: 15px;
  transition: background 0.2s;
}
.hdr_contact_btn:hover {
  background: #c05621;
}
```

#### ナビゲーションメニュー構成（推奨）

現在のWordPressメニュー（`header` ロケーション）を以下に更新:

| 順番 | メニュー項目 | リンク先 | 備考 |
|------|-----------|---------|------|
| 1 | ホーム | / | |
| 2 | 蜂駆除 | /bee | メインサービス |
| 3 | 料金表 | /bee#price | ページ内リンク |
| 4 | 作業の流れ | /flow | 非公開→公開に変更 |
| 5 | 施工事例 | /case | 非公開→公開に変更 |
| 6 | 鍵交換 | /key | サブサービス |
| 7 | よくある質問 | /faq | |
| 8 | 店舗案内 | /about | |
| 9 | お問い合わせ | /contact | |

---

### 1-2. SPヘッダー

#### 現状の問題点

| 問題 | ファイル・行番号 |
|------|---------------|
| 電話番号が080-3935-2300（PCと異なる） | `view/header.php` 109行目 |
| アイコンが画像ファイル（sp_tel.png, sp_mail.png） | `view/header.php` 106, 109行目 |
| ハンバーガーメニューは既存あり（menu_icon） | `view/header.php` 77行目 |

#### 改修後のHTML構造案

**修正ファイル**: `view/header.php` 103〜112行目を以下に置換

```html
<div class="sp_hdr_info_wrap sp-only">
  <div class="sp_hdr_info">
    <!-- メールアイコン -->
    <a href="/contact" class="sp_hdr_icon sp_hdr_mail" aria-label="お問い合わせ">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
      <span class="sp_hdr_icon_label">メール</span>
    </a>
    <!-- 電話アイコン（統一番号） -->
    <a href="tel:09084510837" class="sp_hdr_icon sp_hdr_tel" aria-label="電話する">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
      <span class="sp_hdr_icon_label">電話</span>
    </a>
  </div>
</div>
```

**CSS追加**:

```css
/* SPヘッダーアイコン */
.sp_hdr_info {
  display: flex;
  align-items: center;
  gap: 4px;
}
.sp_hdr_icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  text-decoration: none;
  padding: 6px 10px;
}
.sp_hdr_mail {
  color: #3182ce;
}
.sp_hdr_tel {
  color: #c53030;
}
.sp_hdr_icon_label {
  font-size: 10px;
  font-weight: 700;
}
```

---

### 1-3. モバイル固定CTAバー（最重要）

#### 設計方針

- 画面下部に常時固定表示（position: fixed; bottom: 0）
- 左半分「電話する」ボタン + 右半分「LINE相談」ボタン
- LINE未導入の場合は「お問い合わせ」ボタンで代替
- z-index: 9999 で他要素の上に表示
- PC（769px以上）では非表示
- body に padding-bottom を追加してコンテンツが隠れないようにする

#### 業界データ

> モバイル下部に電話ボタン常時固定 → 電話問い合わせ **40〜60%増加**（業界実績）

#### HTML（追加先: `view/footer.php` 48行目の `<p class="pagetop">` の直前）

```html
<!-- モバイル固定CTAバー -->
<div class="sp_fixed_cta sp-only" role="complementary" aria-label="お問い合わせ">
  <a href="tel:09084510837" class="sp_fixed_btn sp_fixed_tel">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
    <span class="sp_fixed_btn_text">電話する</span>
    <span class="sp_fixed_btn_sub">24時間対応</span>
  </a>
  <a href="https://line.me/R/ti/p/XXXXX" class="sp_fixed_btn sp_fixed_line" target="_blank" rel="noopener">
    <!-- LINE icon（SVGロゴ簡略版） -->
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 5.81 2 10.5c0 4.08 3.42 7.5 8.05 8.33.31.07.74.2.85.47.1.24.06.62.03.86l-.14.82c-.04.24-.19.95.83.52s5.53-3.26 7.55-5.58C21.13 13.64 22 12.13 22 10.5 22 5.81 17.52 2 12 2z"/>
    </svg>
    <span class="sp_fixed_btn_text">LINE相談</span>
    <span class="sp_fixed_btn_sub">写真で見積もり</span>
  </a>
</div>
```

**LINE未導入の場合の代替**:

```html
  <a href="/contact" class="sp_fixed_btn sp_fixed_contact">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
    <span class="sp_fixed_btn_text">お問い合わせ</span>
    <span class="sp_fixed_btn_sub">24時間受付</span>
  </a>
```

#### CSS（追加先: `assets/css/main.css` 末尾）

```css
/* ============================================
   モバイル固定CTAバー
   ============================================ */
.sp_fixed_cta {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 9999;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.15);
}

.sp_fixed_btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0 8px;
  text-decoration: none;
  color: #fff;
  line-height: 1.2;
  -webkit-tap-highlight-color: transparent;
}

/* 電話ボタン: 赤（緊急感） */
.sp_fixed_tel {
  background: #c53030;
}
.sp_fixed_tel:active {
  background: #9b2c2c;
}

/* LINEボタン: LINEグリーン */
.sp_fixed_line {
  background: #06c755;
}
.sp_fixed_line:active {
  background: #05a548;
}

/* お問い合わせボタン（LINE未導入時の代替） */
.sp_fixed_contact {
  background: #2b6cb0;
}
.sp_fixed_contact:active {
  background: #2c5282;
}

.sp_fixed_btn_text {
  font-size: 14px;
  font-weight: 900;
  margin-top: 2px;
}

.sp_fixed_btn_sub {
  font-size: 10px;
  opacity: 0.9;
  margin-top: 1px;
}

/* bodyの下部にパディング追加（CTAバーでコンテンツが隠れないように） */
@media (max-width: 768px) {
  body {
    padding-bottom: 64px;
  }
}

/* PCでは非表示 */
@media (min-width: 769px) {
  .sp_fixed_cta {
    display: none !important;
  }
}
```

#### GTM計測設定（推奨）

| イベント | トリガー | GA4イベント名 |
|---------|---------|-------------|
| 電話タップ | `.sp_fixed_tel` クリック | `cta_phone_tap` |
| LINE相談タップ | `.sp_fixed_line` クリック | `cta_line_tap` |
| お問い合わせタップ | `.sp_fixed_contact` クリック | `cta_contact_tap` |

---

### 1-4. フッター

#### 現状の問題点

| 問題 | ファイル・行番号 |
|------|---------------|
| フッターにCTAがない（ナビ + Copyright のみ） | `view/footer.php` 全体 |
| フッターに電話番号がない | `view/footer.php` |
| フッターに会社情報がない | `view/footer.php` |
| SNSシェアボタンは1カラム時のみ表示 | `view/footer.php` 3-6行目 |

#### 改修後のHTML構造案

**修正ファイル**: `view/footer.php` 全体を以下に置換

```html
  <footer>
    <?php
    $flag_column_under = $settings['flag_column_under'];
    if( $flag_column_under === '1column' && !is_front_page() && !is_404() ):
    ?>
    @include('view.sns')
    <?php endif; ?>

    <!-- フッターCTA -->
    <div class="footer_cta_wrap">
      <div class="container">
        <div class="row">
          <div class="footer_cta">
            <p class="footer_cta_lead">蜂のトラブル、まずはお気軽にご相談ください</p>
            <div class="footer_cta_inner">
              <div class="footer_cta_tel">
                <p class="footer_cta_label">お電話でのご相談（24時間対応）</p>
                <a href="tel:09084510837" class="footer_cta_tel_num">090-8451-0837</a>
                <p class="footer_cta_tel_note">通話料無料相談・概算見積もりOK</p>
              </div>
              <div class="footer_cta_form">
                <a href="/contact" class="footer_cta_form_btn">お問い合わせフォーム</a>
                <p class="footer_cta_form_note">24時間受付・翌日までに返信</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- フッター会社情報 -->
    <div class="footer_info_wrap">
      <div class="container">
        <div class="row">
          <div class="col span_4 footer_info_block">
            <h3 class="footer_info_title">蜂駆除・鍵交換 あらい</h3>
            <dl class="footer_info_list">
              <dt>所在地</dt>
              <dd>〒830-0001<br>福岡県久留米市小森野6丁目18-27</dd>
              <dt>電話番号</dt>
              <dd><a href="tel:09084510837">090-8451-0837</a></dd>
              <dt>営業時間</dt>
              <dd>24時間対応・年中無休</dd>
              <dt>対応エリア</dt>
              <dd>福岡県・佐賀県・熊本県</dd>
              <dt>お支払い方法</dt>
              <dd>現金・クレジットカード（VISA/JCB/AmEx）</dd>
            </dl>
          </div>
          <div class="col span_4 footer_info_block">
            <h3 class="footer_info_title">サービス</h3>
            <ul class="footer_link_list">
              <li><a href="/bee">蜂駆除サービス</a></li>
              <li><a href="/bee#price">蜂駆除の料金表</a></li>
              <li><a href="/key">鍵交換サービス</a></li>
              <li><a href="/flow">作業の流れ</a></li>
              <li><a href="/case">施工事例</a></li>
            </ul>
          </div>
          <div class="col span_4 footer_info_block">
            <h3 class="footer_info_title">ご案内</h3>
            <ul class="footer_link_list">
              <li><a href="/about">店舗案内</a></li>
              <li><a href="/faq">よくある質問</a></li>
              <li><a href="/contact">お問い合わせ</a></li>
              <li><a href="/policy">プライバシーポリシー</a></li>
              <li><a href="/sitemap">サイトマップ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- フッターナビ -->
    <div class="footer_nav_wrap">
      <div class="container">
        <div class="row">
        <?php
          $flag_column_under = $settings['flag_column_under'];
          if( !is_front_page() && $flag_column_under === '2column' ){
            $cName = ' pc-only';
          }
          $defaults = array(
            'theme_location'  => 'footer',
            'menu'            => '',
            'container'       => 'nav',
            'container_class' => 'col span_12',
            'container_id'    => '',
            'menu_class'      => '',
            'menu_id'         => '',
            'echo'            => true,
            'fallback_cb'     => 'wp_page_menu',
            'before'          => '',
            'after'           => '',
            'link_before'     => '',
            'link_after'      => '',
            'items_wrap'      => '<ul>%3$s</ul>',
            'depth'           => 0,
            'walker'          => ''
          );
          wp_nav_menu( $defaults );
        ?>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer_copyright_wrap">
      <div class="container">
        <div class="row">
          <div class="col span_12">
            <p>Copyright &copy; <?= get_bloginfo() ?> All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
    <p class="pagetop"><a href="#top"></a></p>

    <!-- モバイル固定CTAバー（1-3で定義） -->
    <div class="sp_fixed_cta sp-only" role="complementary" aria-label="お問い合わせ">
      <a href="tel:09084510837" class="sp_fixed_btn sp_fixed_tel">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        <span class="sp_fixed_btn_text">電話する</span>
        <span class="sp_fixed_btn_sub">24時間対応</span>
      </a>
      <a href="/contact" class="sp_fixed_btn sp_fixed_contact">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
        <span class="sp_fixed_btn_text">お問い合わせ</span>
        <span class="sp_fixed_btn_sub">24時間受付</span>
      </a>
    </div>
  </footer>

  <script src="<?= bloginfo('template_url') ?>/assets/js/vendor/bundle.js"></script>
  <script src="<?= bloginfo('template_url') ?>/assets/js/main.js?<?= $timestamp ?>"></script>

  <?php wp_footer(); ?>
</body>
</html>
```

#### フッターCTAのCSS

```css
/* ============================================
   フッターCTA
   ============================================ */
.footer_cta_wrap {
  background: #1a202c;
  padding: 48px 0;
}
.footer_cta {
  text-align: center;
}
.footer_cta_lead {
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 24px;
}
.footer_cta_inner {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}
.footer_cta_tel {
  text-align: center;
}
.footer_cta_label {
  color: #cbd5e0;
  font-size: 14px;
  margin-bottom: 4px;
}
.footer_cta_tel_num {
  display: block;
  color: #fc8181;
  font-size: 36px;
  font-weight: 900;
  font-family: "Helvetica Neue", Arial, sans-serif;
  text-decoration: none;
  letter-spacing: 2px;
}
.footer_cta_tel_num:hover {
  color: #feb2b2;
}
.footer_cta_tel_note {
  color: #a0aec0;
  font-size: 12px;
  margin-top: 4px;
}
.footer_cta_form_btn {
  display: inline-block;
  background: #dd6b20;
  color: #fff;
  padding: 16px 36px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s;
}
.footer_cta_form_btn:hover {
  background: #c05621;
}
.footer_cta_form_note {
  color: #a0aec0;
  font-size: 12px;
  margin-top: 8px;
}

/* フッター会社情報 */
.footer_info_wrap {
  background: #2d3748;
  padding: 40px 0;
  color: #e2e8f0;
}
.footer_info_title {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #4a5568;
}
.footer_info_list dt {
  font-size: 12px;
  color: #a0aec0;
  margin-top: 8px;
}
.footer_info_list dd {
  font-size: 14px;
  margin-left: 0;
}
.footer_info_list a {
  color: #fc8181;
  text-decoration: none;
}
.footer_link_list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer_link_list li {
  margin-bottom: 8px;
}
.footer_link_list a {
  color: #e2e8f0;
  text-decoration: none;
  font-size: 14px;
}
.footer_link_list a:hover {
  color: #fc8181;
}

@media (max-width: 768px) {
  .footer_info_wrap .col {
    width: 100%;
    margin-bottom: 24px;
  }
  .footer_cta_tel_num {
    font-size: 28px;
  }
}
```

---

### 1-5. サイドバー（2カラムページ用）

#### 現状

**ファイル**: `view/sidebar.php`（11行）

現在はWordPressウィジェット（`dynamic_sidebar('sidebar')`）+ SNSシェアボタンのみ。

#### 改修後のHTML構造案

**修正ファイル**: `view/sidebar.php` 全体を以下に置換

```html
<div class="sidebar">
  <!-- CTAバナー（最上部） -->
  <div class="sidebar_cta">
    <div class="sidebar_cta_inner">
      <p class="sidebar_cta_title">蜂のトラブル<br>今すぐご相談ください</p>
      <a href="tel:09084510837" class="sidebar_cta_tel">
        <span class="sidebar_cta_tel_icon">&#9742;</span>
        090-8451-0837
      </a>
      <p class="sidebar_cta_note">24時間対応・通話無料相談</p>
      <a href="/contact" class="sidebar_cta_btn">お問い合わせフォーム</a>
    </div>
  </div>

  <!-- ページ一覧 -->
  <div class="sidebar_section">
    <h3 class="sidebar_heading">サービス案内</h3>
    <ul class="sidebar_nav">
      <li><a href="/bee">蜂駆除サービス・料金表</a></li>
      <li><a href="/key">鍵交換サービス</a></li>
      <li><a href="/flow">作業の流れ</a></li>
      <li><a href="/case">施工事例</a></li>
      <li><a href="/faq">よくある質問</a></li>
      <li><a href="/about">店舗案内</a></li>
      <li><a href="/contact">お問い合わせ</a></li>
    </ul>
  </div>

  <!-- カテゴリ -->
  <div class="sidebar_section">
    <h3 class="sidebar_heading">ブログカテゴリ</h3>
    <ul class="sidebar_nav">
      <?php wp_list_categories(array(
        'title_li' => '',
        'show_count' => true,
      )); ?>
    </ul>
  </div>

  <!-- 最近の投稿 -->
  <div class="sidebar_section">
    <h3 class="sidebar_heading">最近の投稿</h3>
    <ul class="sidebar_recent">
      <?php
      $recent_posts = wp_get_recent_posts(array(
        'numberposts' => 5,
        'post_status' => 'publish',
      ));
      foreach($recent_posts as $post) : ?>
        <li>
          <a href="<?= get_permalink($post['ID']) ?>">
            <span class="sidebar_recent_date"><?= get_the_date('Y.m.d', $post['ID']) ?></span>
            <span class="sidebar_recent_title"><?= $post['post_title'] ?></span>
          </a>
        </li>
      <?php endforeach; wp_reset_query(); ?>
    </ul>
  </div>

  <!-- 下部CTAバナー -->
  <div class="sidebar_cta sidebar_cta_bottom">
    <div class="sidebar_cta_inner">
      <p class="sidebar_cta_title">料金は全部お伝えします</p>
      <p class="sidebar_cta_sub">スズメバチ 22,000円〜<br>アシナガバチ 11,000円〜</p>
      <a href="/bee#price" class="sidebar_cta_btn">料金表を見る</a>
    </div>
  </div>

  <?= dynamic_sidebar('sidebar') ?>
</div>

<?php
$flag_column_under = $settings['flag_column_under'];
if( $flag_column_under === '2column' && !is_front_page() && !is_404() ):
?>
<div>
@include('view.sns')
</div>
<?php endif; ?>
```

#### サイドバーCSS

```css
/* ============================================
   サイドバー
   ============================================ */
.sidebar_cta {
  background: #fff5f5;
  border: 2px solid #c53030;
  border-radius: 8px;
  margin-bottom: 24px;
  overflow: hidden;
}
.sidebar_cta_inner {
  padding: 20px 16px;
  text-align: center;
}
.sidebar_cta_title {
  font-size: 18px;
  font-weight: 900;
  color: #c53030;
  line-height: 1.4;
  margin-bottom: 12px;
}
.sidebar_cta_sub {
  font-size: 14px;
  color: #2d3748;
  margin-bottom: 12px;
  line-height: 1.6;
}
.sidebar_cta_tel {
  display: block;
  font-size: 22px;
  font-weight: 900;
  color: #c53030;
  text-decoration: none;
  font-family: "Helvetica Neue", Arial, sans-serif;
  margin-bottom: 4px;
}
.sidebar_cta_note {
  font-size: 11px;
  color: #718096;
  margin-bottom: 12px;
}
.sidebar_cta_btn {
  display: block;
  background: #dd6b20;
  color: #fff;
  padding: 10px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  transition: background 0.2s;
}
.sidebar_cta_btn:hover {
  background: #c05621;
}

.sidebar_section {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 24px;
  overflow: hidden;
}
.sidebar_heading {
  background: #2d3748;
  color: #fff;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 700;
  margin: 0;
}
.sidebar_nav {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sidebar_nav li {
  border-bottom: 1px solid #edf2f7;
}
.sidebar_nav li:last-child {
  border-bottom: none;
}
.sidebar_nav a {
  display: block;
  padding: 10px 16px;
  color: #2d3748;
  text-decoration: none;
  font-size: 14px;
  transition: background 0.2s;
}
.sidebar_nav a:hover {
  background: #f7fafc;
  color: #c53030;
}

.sidebar_recent {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sidebar_recent li {
  border-bottom: 1px solid #edf2f7;
}
.sidebar_recent li:last-child {
  border-bottom: none;
}
.sidebar_recent a {
  display: block;
  padding: 10px 16px;
  text-decoration: none;
  color: #2d3748;
  transition: background 0.2s;
}
.sidebar_recent a:hover {
  background: #f7fafc;
}
.sidebar_recent_date {
  display: block;
  font-size: 11px;
  color: #a0aec0;
}
.sidebar_recent_title {
  display: block;
  font-size: 13px;
  line-height: 1.5;
  margin-top: 2px;
}

.sidebar_cta_bottom {
  border-color: #dd6b20;
  background: #fffaf0;
}
.sidebar_cta_bottom .sidebar_cta_title {
  color: #dd6b20;
}
```

---

## Part 2: 蜂駆除サービスページ（/bee）制作案

---

### 基本SEO設定

| 項目 | 値 |
|------|-----|
| **URL** | `https://www.hachikujyo-arai.com/bee` |
| **slug** | `bee`（既存 / 固定ページID: 261） |
| **title** | `福岡市の蜂駆除 料金表｜スズメバチ22,000円〜｜24時間対応｜蜂駆除あらい` |
| **meta description** | `福岡市の蜂駆除なら「あらい」へ。スズメバチ22,000円〜、アシナガバチ11,000円〜。料金は全て事前にお伝えします。24時間365日対応、最短即日駆除。追加料金の条件も全公開。まずはお電話で無料相談・概算見積もり。090-8451-0837` |
| **H1** | `福岡市の蜂駆除 料金・サービス案内` |
| **修正ファイル** | AIOSEO管理画面（`_aioseop_title`, `_aioseop_description`）+ WP固定ページ本文 |

### セクション構成（上から順）

---

#### Section 1: H1 + リード文

```html
<section class="bee_hero">
  <h1>福岡市の蜂駆除 料金・サービス案内</h1>
  <p class="bee_hero_lead">
    福岡市の蜂駆除屋あらいです。<br>
    <strong>料金は全部お伝えします。</strong>
  </p>
  <p class="bee_hero_text">
    蜂の巣を見つけて不安なあなたへ。<br>
    蜂の種類・巣の大きさ・設置場所に応じた料金を、<br class="pc-only">
    このページで全てお伝えしています。<br>
    お電話いただければ概算金額もすぐにお答えします。
  </p>
  <div class="bee_hero_cta">
    <a href="tel:09084510837" class="btn_tel_large">
      <span class="btn_tel_icon">&#9742;</span>
      今すぐ電話で無料相談
      <span class="btn_tel_num">090-8451-0837</span>
    </a>
    <p class="bee_hero_cta_note">24時間365日対応｜通話料無料相談・概算見積もりOK</p>
  </div>
</section>
```

---

#### Section 2: 蜂の種類別料金表（季節別）

```html
<section id="price" class="bee_price">
  <h2>蜂駆除の料金表</h2>
  <p class="section_lead">
    蜂の種類と時期によって料金が異なります。<br>
    <strong>以下の料金は全て税込です。</strong>隠れた費用は一切ありません。
  </p>

  <div class="price_table_wrap">
    <table class="price_table">
      <thead>
        <tr>
          <th>蜂の種類</th>
          <th>11〜5月<br><span class="price_season">（オフシーズン）</span></th>
          <th>6月<br><span class="price_season">（初期）</span></th>
          <th class="price_peak">7〜9月<br><span class="price_season">（ピーク）</span></th>
          <th>10月<br><span class="price_season">（終盤）</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="price_bee_name">
            <strong>アシナガバチ</strong>
            <span class="price_bee_note">家の軒下・ベランダに多い</span>
          </td>
          <td><strong>11,000</strong>円</td>
          <td><strong>16,500</strong>円</td>
          <td class="price_peak"><strong>22,000</strong>円</td>
          <td><strong>16,500</strong>円</td>
        </tr>
        <tr>
          <td class="price_bee_name">
            <strong>スズメバチ</strong>
            <span class="price_bee_note">攻撃性が高く危険</span>
          </td>
          <td><strong>22,000</strong>円</td>
          <td><strong>27,500</strong>円</td>
          <td class="price_peak"><strong>33,000</strong>円</td>
          <td><strong>27,500</strong>円</td>
        </tr>
        <tr>
          <td class="price_bee_name">
            <strong>オオスズメバチ</strong>
            <span class="price_bee_note">最も危険・地中に巣を作る</span>
          </td>
          <td><strong>33,000</strong>円</td>
          <td><strong>44,000</strong>円</td>
          <td class="price_peak"><strong>55,000</strong>円</td>
          <td><strong>44,000</strong>円</td>
        </tr>
        <tr>
          <td class="price_bee_name">
            <strong>ミツバチ・その他</strong>
            <span class="price_bee_note">ドロバチ・クマバチ等</span>
          </td>
          <td><strong>11,000</strong>円</td>
          <td><strong>16,500</strong>円</td>
          <td class="price_peak"><strong>22,000</strong>円</td>
          <td><strong>16,500</strong>円</td>
        </tr>
      </tbody>
    </table>
    <p class="price_table_note">※ 上記は基本料金（税込）です。巣の場所や大きさにより追加料金が発生する場合があります。</p>
  </div>

  <div class="price_why">
    <h3>なぜ季節で料金が変わるのか？</h3>
    <p>
      蜂の巣は春に作り始め、夏〜秋にかけて巨大化します。
      巣が大きくなるほど蜂の数が増え、駆除の難易度と危険性が上がります。
      そのため、ピークシーズン（7〜9月）は料金が高くなります。<br>
      <strong>早めのご相談が、安全にも費用にもお得です。</strong>
    </p>
  </div>
</section>
```

---

#### Section 3: 追加料金の透明な説明

```html
<section class="bee_additional">
  <h2>追加料金について ― 全てお伝えします</h2>
  <p class="section_lead">
    「基本料金だけで済むと思ったのに...」という不安を解消するために、<br>
    追加料金が発生する条件を全て公開しています。
  </p>

  <div class="additional_table_wrap">
    <table class="additional_table">
      <thead>
        <tr>
          <th>追加料金の種類</th>
          <th>金額（税込）</th>
          <th>該当するケース</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>調査費</strong></td>
          <td><strong>11,000</strong>円</td>
          <td>巣の場所が特定できない場合の調査。目視で確認できる場合は不要です。</td>
        </tr>
        <tr>
          <td><strong>高所作業費</strong></td>
          <td><strong>5,500〜11,000</strong>円</td>
          <td>2階以上の軒下、屋根付近など、はしごや特殊機材が必要な場合。</td>
        </tr>
        <tr>
          <td><strong>屋根裏作業費</strong></td>
          <td><strong>11,000</strong>円</td>
          <td>天井裏・屋根裏に巣がある場合。点検口からの進入作業が必要な場合。</td>
        </tr>
        <tr>
          <td><strong>地中作業費</strong></td>
          <td><strong>11,000</strong>円</td>
          <td>地面の中（オオスズメバチに多い）に巣がある場合。掘り出し作業が必要な場合。</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="additional_promise">
    <h3>あらいの約束</h3>
    <ul>
      <li>お電話で状況をお聞きし、<strong>概算金額を事前にお伝え</strong>します。</li>
      <li>現地調査後、作業前に<strong>正式な金額をご提示</strong>します。</li>
      <li>ご了承いただいてから作業を開始します。<strong>勝手に追加料金が発生することはありません。</strong></li>
      <li>お見積もり後のキャンセルもOKです。お気軽にご相談ください。</li>
    </ul>
  </div>
</section>
```

---

#### Section 4: 他社との料金比較（任意）

```html
<section class="bee_compare">
  <h2>蜂駆除の料金相場 ― 他社との比較</h2>
  <p class="section_lead">
    「うちの料金は高い？安い？」がわかるように、<br>
    福岡エリアの蜂駆除料金の相場をまとめました。
  </p>

  <table class="compare_table">
    <thead>
      <tr>
        <th></th>
        <th class="compare_highlight">蜂駆除あらい</th>
        <th>A社（全国チェーン）</th>
        <th>B社（地域業者）</th>
        <th>相場平均</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>アシナガバチ</td>
        <td class="compare_highlight"><strong>11,000〜22,000円</strong></td>
        <td>3,000円〜（実質20,000円以上の場合も）</td>
        <td>10,000〜30,000円</td>
        <td>8,000〜25,000円</td>
      </tr>
      <tr>
        <td>スズメバチ</td>
        <td class="compare_highlight"><strong>22,000〜33,000円</strong></td>
        <td>8,000円〜（実質30,000円以上の場合も）</td>
        <td>15,000〜50,000円</td>
        <td>15,000〜40,000円</td>
      </tr>
      <tr>
        <td>オオスズメバチ</td>
        <td class="compare_highlight"><strong>33,000〜55,000円</strong></td>
        <td>「要見積もり」（金額不明）</td>
        <td>30,000〜80,000円</td>
        <td>30,000〜60,000円</td>
      </tr>
      <tr>
        <td>料金の透明性</td>
        <td class="compare_highlight"><strong>全額事前公開</strong></td>
        <td>「〜」表記のみ</td>
        <td>見積もり後に提示</td>
        <td>-</td>
      </tr>
      <tr>
        <td>追加料金の説明</td>
        <td class="compare_highlight"><strong>全条件を事前公開</strong></td>
        <td>現地調査後に判明</td>
        <td>業者により異なる</td>
        <td>-</td>
      </tr>
    </tbody>
  </table>

  <div class="compare_note">
    <p>
      <strong>「3,000円〜」の落とし穴にご注意ください。</strong><br>
      一部の業者は最低料金だけを大きく表示し、実際の請求額が大幅に上がるケースがあります。
      あらいでは、蜂の種類・季節・巣の場所に応じた<strong>実際の料金</strong>を全て公開しています。
    </p>
  </div>
</section>
```

---

#### Section 5: 作業の流れ

```html
<section class="bee_flow">
  <h2>蜂駆除の作業の流れ</h2>
  <p class="section_lead">
    お電話から駆除完了まで、<strong>最短で当日中</strong>に対応します。
  </p>

  <div class="flow_steps">
    <div class="flow_step">
      <div class="flow_step_num">1</div>
      <div class="flow_step_content">
        <h3>お電話でご相談</h3>
        <p>
          <a href="tel:09084510837">090-8451-0837</a>にお電話ください。<br>
          蜂の種類・巣の場所・大きさをお聞きし、<strong>概算金額をその場でお伝え</strong>します。<br>
          「蜂の種類がわからない」「巣が見えない」という場合もご安心ください。状況をお聞きして判断します。
        </p>
        <p class="flow_step_time">所要時間: 約5分</p>
      </div>
    </div>

    <div class="flow_step">
      <div class="flow_step_num">2</div>
      <div class="flow_step_content">
        <h3>現地調査・正式お見積もり（無料）</h3>
        <p>
          ご自宅に伺い、巣の状態を直接確認します。<br>
          確認後、<strong>正式な駆除料金をご提示</strong>します。<br>
          この時点でキャンセルされても費用は一切かかりません。
        </p>
        <p class="flow_step_time">所要時間: 約15分</p>
      </div>
    </div>

    <div class="flow_step">
      <div class="flow_step_num">3</div>
      <div class="flow_step_content">
        <h3>駆除作業</h3>
        <p>
          料金にご了承いただいてから作業を開始します。<br>
          防護服を着用し、安全に配慮して駆除を行います。<br>
          巣の撤去後、<strong>戻り蜂対策の薬剤処理</strong>も行います。
        </p>
        <p class="flow_step_time">所要時間: 約30分〜1時間（巣の大きさによる）</p>
      </div>
    </div>

    <div class="flow_step">
      <div class="flow_step_num">4</div>
      <div class="flow_step_content">
        <h3>完了確認・お支払い</h3>
        <p>
          駆除完了後、巣があった場所をご確認いただきます。<br>
          <strong>お支払いは現金またはクレジットカード</strong>（VISA / JCB / American Express）で承ります。<br>
          駆除後の注意点（戻り蜂への対処法など）もお伝えします。
        </p>
      </div>
    </div>
  </div>

  <div class="flow_cta">
    <p>まずはお電話で無料相談。概算金額をすぐにお伝えします。</p>
    <a href="tel:09084510837" class="btn_tel_large">
      <span class="btn_tel_icon">&#9742;</span>
      090-8451-0837
    </a>
    <p class="flow_cta_note">24時間365日対応</p>
  </div>
</section>
```

---

#### Section 6: 対応できる蜂の種類

```html
<section class="bee_types">
  <h2>対応できる蜂の種類</h2>
  <p class="section_lead">
    福岡県で見られる主な蜂の種類と特徴をご紹介します。<br>
    <strong>どの種類でも駆除対応いたします。</strong>
  </p>

  <div class="bee_type_cards">
    <div class="bee_type_card bee_type_danger">
      <div class="bee_type_badge">危険度: 極めて高い</div>
      <h3>オオスズメバチ</h3>
      <p class="bee_type_price">駆除料金: 33,000〜55,000円（税込）</p>
      <ul>
        <li>体長3〜4cm。日本最大の蜂。</li>
        <li>地中や木の洞に巣を作ることが多い。</li>
        <li>攻撃性が非常に高く、毒も強い。刺されると命に関わることも。</li>
        <li><strong>絶対に自分で駆除しないでください。</strong></li>
      </ul>
      <!-- 将来的に種類別詳細ページへリンク -->
      <!-- <a href="/bee-type/oosuzumebachi/">詳しく見る</a> -->
    </div>

    <div class="bee_type_card bee_type_danger">
      <div class="bee_type_badge">危険度: 高い</div>
      <h3>スズメバチ（キイロスズメバチ等）</h3>
      <p class="bee_type_price">駆除料金: 22,000〜33,000円（税込）</p>
      <ul>
        <li>体長2〜3cm。福岡で最も駆除依頼が多い種類。</li>
        <li>軒下、屋根裏、木の枝などに大きな球状の巣を作る。</li>
        <li>巣に近づくと集団で攻撃してくる。7〜9月は特に攻撃的。</li>
      </ul>
    </div>

    <div class="bee_type_card bee_type_caution">
      <div class="bee_type_badge">危険度: 中程度</div>
      <h3>アシナガバチ</h3>
      <p class="bee_type_price">駆除料金: 11,000〜22,000円（税込）</p>
      <ul>
        <li>体長2cm前後。細身で脚が長い。</li>
        <li>軒下、ベランダ、エアコン室外機の裏などに巣を作る。</li>
        <li>スズメバチほど攻撃的ではないが、巣を刺激すると刺される。</li>
      </ul>
    </div>

    <div class="bee_type_card bee_type_low">
      <div class="bee_type_badge">危険度: 低い</div>
      <h3>ミツバチ・その他</h3>
      <p class="bee_type_price">駆除料金: 11,000〜22,000円（税込）</p>
      <ul>
        <li>ミツバチ、ドロバチ、クマバチ等。</li>
        <li>比較的おとなしいが、大量に集まると問題になる。</li>
        <li>ミツバチは壁の中に巣を作ることがあり、放置すると建物を傷める可能性がある。</li>
      </ul>
    </div>
  </div>

  <div class="bee_type_guide">
    <h3>蜂の種類がわからない場合</h3>
    <p>
      「どの蜂かわからない」「巣は見えるけど蜂の種類がわからない」という場合は、<br>
      <strong>お電話で状況をお伝えいただければ、種類を判断してお見積もりします。</strong><br>
      写真を撮って送っていただければ、より正確にお答えできます。
    </p>
  </div>
</section>
```

---

#### Section 7: 施工事例（事例ページへのリンク）

```html
<section class="bee_cases">
  <h2>蜂駆除の施工事例</h2>
  <p class="section_lead">
    実際に福岡で駆除した事例をご紹介します。
  </p>

  <!-- 事例カード（3件表示 → もっと見るで事例ページへ） -->
  <div class="case_cards">
    <div class="case_card">
      <div class="case_card_img">
        <!-- 施工写真（wp-content/uploadsの既存写真を活用） -->
        <img src="/wp-content/uploads/case_placeholder.jpg" alt="久留米市 スズメバチ駆除">
      </div>
      <div class="case_card_body">
        <span class="case_card_tag">スズメバチ</span>
        <h3>久留米市 ― 2階軒下のスズメバチの巣を駆除</h3>
        <dl class="case_card_info">
          <dt>蜂の種類</dt><dd>キイロスズメバチ</dd>
          <dt>巣の場所</dt><dd>2階軒下</dd>
          <dt>巣の大きさ</dt><dd>約25cm</dd>
          <dt>作業時間</dt><dd>約45分</dd>
          <dt>料金</dt><dd>33,000円 + 高所作業費 5,500円 = <strong>38,500円（税込）</strong></dd>
        </dl>
      </div>
    </div>

    <!-- 追加の事例カード（同じ構造で2〜3件追加） -->
  </div>

  <div class="case_more">
    <a href="/case" class="btn_outline">施工事例をもっと見る</a>
  </div>
</section>
```

---

#### Section 8: CTA（ページ最下部）

```html
<section class="bee_cta_final">
  <div class="bee_cta_final_inner">
    <h2>蜂の巣を見つけたら、まずはお電話ください</h2>
    <p class="bee_cta_final_lead">
      蜂の種類・巣の場所をお聞きして、<br>
      <strong>概算金額をその場でお伝えします。</strong><br>
      お見積もり後のキャンセルもOK。お気軽にどうぞ。
    </p>
    <div class="bee_cta_final_buttons">
      <a href="tel:09084510837" class="btn_tel_large">
        <span class="btn_tel_icon">&#9742;</span>
        電話で無料相談する
        <span class="btn_tel_num">090-8451-0837</span>
      </a>
      <a href="/contact" class="btn_contact_large">
        お問い合わせフォーム
      </a>
    </div>
    <p class="bee_cta_final_note">24時間365日対応 ｜ 各種クレジットカード利用可</p>
  </div>
</section>
```

#### CTA共通ボタンのCSS

```css
/* ============================================
   CTA共通ボタン
   ============================================ */
.btn_tel_large {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: #c53030;
  color: #fff;
  padding: 16px 40px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  transition: background 0.2s;
  line-height: 1.4;
}
.btn_tel_large:hover {
  background: #9b2c2c;
}
.btn_tel_icon {
  font-size: 24px;
  margin-bottom: 2px;
}
.btn_tel_num {
  display: block;
  font-size: 28px;
  font-weight: 900;
  font-family: "Helvetica Neue", Arial, sans-serif;
  letter-spacing: 2px;
  margin-top: 4px;
}
.btn_contact_large {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #dd6b20;
  color: #fff;
  padding: 16px 40px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  transition: background 0.2s;
}
.btn_contact_large:hover {
  background: #c05621;
}
.btn_outline {
  display: inline-block;
  border: 2px solid #c53030;
  color: #c53030;
  padding: 12px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.2s;
}
.btn_outline:hover {
  background: #c53030;
  color: #fff;
}

/* 最終CTA */
.bee_cta_final {
  background: #1a202c;
  padding: 60px 0;
  text-align: center;
}
.bee_cta_final h2 {
  color: #fff;
  font-size: 24px;
  margin-bottom: 16px;
}
.bee_cta_final_lead {
  color: #cbd5e0;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 32px;
}
.bee_cta_final_buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.bee_cta_final_note {
  color: #a0aec0;
  font-size: 13px;
}

@media (max-width: 768px) {
  .btn_tel_large,
  .btn_contact_large {
    width: 100%;
    padding: 14px 20px;
    font-size: 16px;
  }
  .btn_tel_num {
    font-size: 24px;
  }
  .bee_cta_final h2 {
    font-size: 20px;
  }
}
```

---

## Part 3: 鍵交換サービスページ（/key）制作案

---

### 基本SEO設定

| 項目 | 値 |
|------|-----|
| **URL** | `https://www.hachikujyo-arai.com/key` |
| **slug** | `key`（既存 / 固定ページID: 257） |
| **title** | `福岡市の鍵交換・鍵修理｜料金表あり・24時間対応｜鍵交換あらい` |
| **meta description** | `福岡市の鍵交換・鍵修理なら「あらい」へ。玄関ドアの鍵交換、鍵の紛失、鍵が回らない等のトラブルに24時間365日対応。料金は事前にお伝えします。まずはお電話で無料相談。090-8451-0837` |
| **H1** | `福岡市の鍵交換・鍵修理 料金・サービス案内` |
| **修正ファイル** | AIOSEO管理画面（`_aioseop_title`, `_aioseop_description`）+ WP固定ページ本文 |

### セクション構成（上から順）

---

#### Section 1: H1 + リード文

```html
<section class="key_hero">
  <h1>福岡市の鍵交換・鍵修理 料金・サービス案内</h1>
  <p class="key_hero_lead">
    鍵のトラブルも「あらい」にお任せください。<br>
    <strong>料金は作業前に必ずお伝えします。</strong>
  </p>
  <p class="key_hero_text">
    玄関の鍵交換、鍵の紛失、鍵が回らない・抜けない等のトラブルに、<br class="pc-only">
    24時間365日対応しています。<br>
    蜂駆除と同じく、<strong>料金の透明性</strong>を大切にしています。
  </p>
  <div class="key_hero_cta">
    <a href="tel:09084510837" class="btn_tel_large">
      <span class="btn_tel_icon">&#9742;</span>
      今すぐ電話で無料相談
      <span class="btn_tel_num">090-8451-0837</span>
    </a>
    <p class="key_hero_cta_note">24時間365日対応｜通話料無料相談</p>
  </div>
</section>
```

---

#### Section 2: 対応できる鍵のトラブル

```html
<section class="key_services">
  <h2>対応できる鍵のトラブル</h2>
  <p class="section_lead">
    住宅・事務所の鍵トラブル全般に対応しています。
  </p>

  <div class="key_service_cards">
    <div class="key_service_card">
      <h3>鍵交換</h3>
      <p>
        古い鍵から新しい鍵への交換。防犯性の高いディンプルキーへの交換もお任せください。
        引っ越し後の防犯対策、鍵の経年劣化による交換など。
      </p>
      <ul>
        <li>玄関ドアの鍵交換</li>
        <li>ディンプルキーへのグレードアップ</li>
        <li>引っ越し後の鍵交換</li>
        <li>古い鍵の防犯強化</li>
      </ul>
    </div>

    <div class="key_service_card">
      <h3>鍵修理</h3>
      <p>
        鍵が回りにくい、鍵が抜けない、鍵穴に異物が詰まった等のトラブルを修理します。
        交換が不要な場合は、修理で対応できることもあります。
      </p>
      <ul>
        <li>鍵が回らない・回りにくい</li>
        <li>鍵が抜けない</li>
        <li>鍵穴の不具合</li>
        <li>ドアノブの故障</li>
      </ul>
    </div>

    <div class="key_service_card">
      <h3>鍵の紛失対応</h3>
      <p>
        鍵をなくしてしまった場合の緊急対応。
        鍵の紛失は防犯上のリスクもあるため、鍵交換もあわせてお勧めしています。
      </p>
      <ul>
        <li>鍵の紛失による開錠</li>
        <li>紛失後の鍵交換</li>
        <li>スペアキーの作成</li>
      </ul>
    </div>
  </div>
</section>
```

---

#### Section 3: 料金表

```html
<section id="key-price" class="key_price">
  <h2>鍵交換・鍵修理の料金</h2>
  <p class="section_lead">
    鍵の種類・作業内容に応じた料金をご案内します。<br>
    <strong>正式な金額は現地確認後、作業前にお伝えします。</strong>
  </p>

  <table class="price_table">
    <thead>
      <tr>
        <th>サービス内容</th>
        <th>料金（税込）</th>
        <th>備考</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>玄関ドア鍵交換（シリンダー錠）</strong></td>
        <td><strong>15,000〜25,000</strong>円</td>
        <td>鍵の種類・メーカーにより異なります</td>
      </tr>
      <tr>
        <td><strong>玄関ドア鍵交換（ディンプルキー）</strong></td>
        <td><strong>20,000〜35,000</strong>円</td>
        <td>防犯性の高い鍵への交換</td>
      </tr>
      <tr>
        <td><strong>鍵修理・調整</strong></td>
        <td><strong>8,000〜15,000</strong>円</td>
        <td>交換不要な場合の修理・潤滑・調整</td>
      </tr>
      <tr>
        <td><strong>鍵開け（紛失時）</strong></td>
        <td><strong>10,000〜20,000</strong>円</td>
        <td>鍵の種類・セキュリティレベルにより異なります</td>
      </tr>
      <tr>
        <td><strong>出張費</strong></td>
        <td><strong>無料</strong></td>
        <td>福岡市内は出張費無料</td>
      </tr>
    </tbody>
  </table>

  <p class="price_table_note">
    ※ 上記は目安料金です。鍵のメーカー・型番・設置状況により変動します。<br>
    ※ 正式な金額は現地確認後、作業前に必ずお伝えします。ご了承いただいてから作業します。
  </p>
</section>
```

---

#### Section 4: 作業の流れ

```html
<section class="key_flow">
  <h2>鍵交換・鍵修理の流れ</h2>

  <div class="flow_steps">
    <div class="flow_step">
      <div class="flow_step_num">1</div>
      <div class="flow_step_content">
        <h3>お電話でご相談</h3>
        <p>
          <a href="tel:09084510837">090-8451-0837</a>にお電話ください。<br>
          鍵の種類・トラブルの状況をお聞きし、概算金額をお伝えします。
        </p>
      </div>
    </div>

    <div class="flow_step">
      <div class="flow_step_num">2</div>
      <div class="flow_step_content">
        <h3>現地確認・正式お見積もり</h3>
        <p>
          ご自宅に伺い、鍵の状態を確認します。<br>
          正式な料金をご提示し、ご了承いただいてから作業します。
        </p>
      </div>
    </div>

    <div class="flow_step">
      <div class="flow_step_num">3</div>
      <div class="flow_step_content">
        <h3>鍵交換・修理作業</h3>
        <p>
          丁寧に作業いたします。作業時間は通常30分〜1時間程度です。
        </p>
      </div>
    </div>

    <div class="flow_step">
      <div class="flow_step_num">4</div>
      <div class="flow_step_content">
        <h3>動作確認・お支払い</h3>
        <p>
          新しい鍵の動作を確認いただき、お支払い。<br>
          現金・クレジットカード（VISA / JCB / AmEx）対応。
        </p>
      </div>
    </div>
  </div>
</section>
```

---

#### Section 5: 選ばれる理由

```html
<section class="key_reasons">
  <h2>あらいの鍵交換が選ばれる理由</h2>

  <div class="reason_cards">
    <div class="reason_card">
      <h3>24時間365日対応</h3>
      <p>
        鍵のトラブルは時間を選びません。<br>
        深夜・早朝・休日でもお電話一本で駆けつけます。
      </p>
    </div>

    <div class="reason_card">
      <h3>料金は作業前にお伝えします</h3>
      <p>
        現地で鍵の状態を確認後、正式な金額をご提示します。<br>
        ご了承いただくまで作業は始めません。追加料金もありません。
      </p>
    </div>

    <div class="reason_card">
      <h3>蜂駆除もまとめて対応</h3>
      <p>
        あらいは蜂駆除も行っています。<br>
        「鍵交換のついでに、軒下の蜂の巣も見てほしい」<br>
        住まいのトラブルを一括でご相談いただけます。
      </p>
    </div>

    <div class="reason_card">
      <h3>地域密着・代表が直接対応</h3>
      <p>
        久留米市に拠点を構え、代表が直接伺います。<br>
        下請け業者に丸投げすることはありません。<br>
        顔の見える安心感を大切にしています。
      </p>
    </div>
  </div>
</section>
```

---

#### Section 6: よくある質問

```html
<section class="key_faq">
  <h2>鍵交換のよくある質問</h2>

  <div class="faq_list">
    <div class="faq_item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h3 itemprop="name">鍵交換にはどのくらい時間がかかりますか？</h3>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">
          一般的な玄関ドアの鍵交換で30分〜1時間程度です。
          鍵の種類やドアの状態により変動しますが、
          ほとんどの場合、お電話いただいたその日のうちに作業完了します。
        </p>
      </div>
    </div>

    <div class="faq_item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h3 itemprop="name">どのメーカーの鍵でも交換できますか？</h3>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">
          主要メーカー（MIWA、GOAL、KABA、WEST、ALPHA等）の鍵に対応しています。
          特殊な鍵の場合は、お電話でメーカー・型番をお伝えいただければ
          対応可否をお答えします。
        </p>
      </div>
    </div>

    <div class="faq_item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h3 itemprop="name">賃貸マンションでも鍵交換できますか？</h3>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">
          賃貸物件の場合は、事前に管理会社または大家さんの許可が必要です。
          許可を得た上でご依頼ください。退去時の原状回復については
          管理会社にご確認をお勧めします。
        </p>
      </div>
    </div>

    <div class="faq_item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h3 itemprop="name">ディンプルキーとは何ですか？</h3>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">
          鍵の表面に丸いくぼみ（ディンプル）がある防犯性の高い鍵です。
          従来のギザギザの鍵に比べてピッキングされにくく、
          防犯対策として交換をお勧めしています。
        </p>
      </div>
    </div>
  </div>
</section>
```

---

#### Section 7: CTA（ページ最下部）

```html
<section class="key_cta_final">
  <div class="key_cta_final_inner">
    <h2>鍵のトラブル、まずはお電話ください</h2>
    <p class="key_cta_final_lead">
      鍵の種類・トラブルの状況をお聞きして、<br>
      <strong>概算金額をその場でお伝えします。</strong><br>
      24時間365日、いつでもご相談ください。
    </p>
    <div class="key_cta_final_buttons">
      <a href="tel:09084510837" class="btn_tel_large">
        <span class="btn_tel_icon">&#9742;</span>
        電話で無料相談する
        <span class="btn_tel_num">090-8451-0837</span>
      </a>
      <a href="/contact" class="btn_contact_large">
        お問い合わせフォーム
      </a>
    </div>
    <p class="key_cta_final_note">
      24時間365日対応 ｜ 各種クレジットカード利用可
    </p>
    <p class="key_cta_cross">
      蜂駆除のご依頼は <a href="/bee" style="color: #fc8181; text-decoration: underline;">蜂駆除サービスページ</a> をご覧ください。
    </p>
  </div>
</section>
```

CSSは蜂駆除ページの `.bee_cta_final` と同じスタイルを適用（クラス名を `.key_cta_final` に変えて同じCSSを記述するか、共通クラス `.service_cta_final` にまとめる）。

---

## Part 4: 修正ファイル一覧（まとめ）

| 対象 | ファイルパス | 修正行番号 | 修正内容 |
|------|-----------|-----------|---------|
| PCヘッダー | `view/header.php` | 84〜101行目 | CTA・電話番号・信頼バッジの構造変更 |
| SPヘッダー | `view/header.php` | 103〜112行目 | 電話番号統一（090-8451-0837）、SVGアイコン化 |
| titleバグ修正 | `view/header.php` | 7行目 | `echo` 追加 or 行削除 |
| XSS対策 | `view/header.php` | 19行目 | `$_SERVER['HTTP_HOST']` をエスケープ |
| フッター | `view/footer.php` | 全体（1〜57行目） | CTA追加・会社情報追加・モバイル固定CTA追加 |
| サイドバー | `view/sidebar.php` | 全体（1〜11行目） | CTAバナー・ナビ・最近の投稿・料金バナー追加 |
| 下層CTA電話番号 | `view/master.php` | 72行目 | 電話番号を統一番号に確認・変更 |
| スティッキーヘッダー | `assets/css/main.css` | 末尾追加 | PC固定ヘッダーCSS |
| モバイル固定CTA | `assets/css/main.css` | 末尾追加 | 固定CTAバーCSS |
| フッターCSS | `assets/css/main.css` | 末尾追加 | フッターCTA・会社情報CSS |
| サイドバーCSS | `assets/css/main.css` | 末尾追加 | サイドバーCSS |
| CTA共通ボタンCSS | `assets/css/main.css` | 末尾追加 | btn_tel_large等の共通ボタンCSS |
| 蜂駆除ページSEO | AIOSEO管理画面 | - | title・meta description設定 |
| 鍵交換ページSEO | AIOSEO管理画面 | - | title・meta description設定 |
| 蜂駆除ページ本文 | WP管理画面 → 固定ページ「蜂駆除あらい」（ID:261） | 本文全体 | 8セクション構成に全面改稿 |
| 鍵交換ページ本文 | WP管理画面 → 固定ページ「鍵交換あらい」（ID:257） | 本文全体 | 7セクション構成に全面改稿 |
| 構造化データ電話番号 | DB: `org_baseTel` または `functions/module/baseinfo.php` | - | 統一番号に変更 |
| 非公開ページ公開 | WP管理画面 → 固定ページ | - | 料金(ID:22)・作業の流れ(ID:24)・事例紹介(ID:18)を公開 |

---

## Part 5: 実装優先順位

### Phase 1: 即座に（所要時間: 半日）

| # | 作業 | 効果 |
|---|------|------|
| 1 | `view/header.php` 7行目 titleバグ修正 | インデックス改善（最重要） |
| 2 | 電話番号の統一（header.php 92, 109行目 + baseinfo.php） | NAP一致 → ローカルSEO改善 |
| 3 | PCヘッダー電話番号のtap-to-call化 | PC/タブレットからの電話CV |

### Phase 2: 1〜2日（所要時間: 1〜2日）

| # | 作業 | 効果 |
|---|------|------|
| 4 | モバイル固定CTAバー追加 | **電話CV 40〜60%増加**（最重要施策） |
| 5 | フッター改修（CTA・会社情報追加） | ページ最下部でのCV獲得 |
| 6 | サイドバー改修（CTAバナー追加） | 2カラムページでのCV獲得 |
| 7 | PCスティッキーヘッダー | 常時電話番号表示 |

### Phase 3: 1週間（所要時間: 3〜5日）

| # | 作業 | 効果 |
|---|------|------|
| 8 | 蜂駆除ページ（/bee）全面改稿 | **メインサービスページのCVR大幅改善** |
| 9 | 蜂駆除ページのSEO設定（title/description） | 「福岡 蜂駆除 料金」等の検索順位改善 |
| 10 | 鍵交換ページ（/key）全面改稿 | サブサービスの訴求強化 |
| 11 | 鍵交換ページのSEO設定 | 「福岡 鍵交換」の検索流入 |
| 12 | 非公開ページ3件の公開 | コンテンツ量増加 → SEO改善 |

---

*制作案作成: 2026-04-02*
