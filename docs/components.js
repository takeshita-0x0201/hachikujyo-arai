/**
 * 蜂駆除あらい デモサイト 共通コンポーネント
 * ヘッダー・モバイルメニュー・CTAセクション・フッター・モバイル固定CTAを
 * 全ページで共通化し、1ファイルで管理する。
 */

const SITE = {
  name: '蜂駆除 あらい',
  nameShort: '蜂駆除あらい',
  tagline: '福岡の蜂駆除',
  tel: '090-8451-0837',
  telRaw: '09084510837',
  address: '〒830-0001 福岡県久留米市小森野6丁目18-27',
  hours: '24時間営業・年中無休',
};

// TODO: LINE公式アカウント開設後、url を友だち追加URL（例: https://lin.ee/xxxxxx）に差し替える
const LINE = {
  url: '#',
  label: 'LINEで相談',
};

// LINE chat icon (chat bubble - safe to use without trademark concerns)
const LINE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>';

const NAV_ITEMS = [
  { label: '蜂駆除・料金', href: 'bee.html' },
  { label: '鍵交換', href: 'key.html' },
  { label: '対応エリア', href: 'area.html' },
  { label: '事例', href: 'case.html' },
  { label: 'FAQ', href: 'faq.html' },
  { label: '店舗案内', href: 'about.html' },
  { label: 'お問い合わせ', href: 'contact.html' },
];

// --- Header ---
function renderHeader() {
  const navLinks = NAV_ITEMS.map(item =>
    `<a href="${item.href}">${item.label}</a>`
  ).join('\n        ');

  return `
  <header class="site-header">
    <div class="header-inner">
      <div class="header-logo">
        <a href="index.html"><small>${SITE.tagline}</small>${SITE.name}</a>
      </div>
      <nav class="header-nav" aria-label="グローバルナビ">
        ${navLinks}
      </nav>
      <div class="header-tel">
        <small>24時間受付・年中無休</small>
        <a href="tel:${SITE.telRaw}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:4px;" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>${SITE.tel}</a>
      </div>
      <button class="header-hamburger" aria-label="メニューを開く" aria-expanded="false"
        aria-controls="mobile-menu" aria-haspopup="dialog"
        onclick="openMobileMenu()">&#9776;</button>
    </div>
  </header>`;
}

// --- Mobile Menu ---
function renderMobileMenu() {
  const menuItems = NAV_ITEMS.map(item =>
    `<li><a href="${item.href}">${item.label}</a></li>`
  ).join('\n        ');

  return `
  <div id="mobile-menu" class="mobile-menu" role="dialog" aria-modal="true" aria-label="メニュー" aria-hidden="true">
    <div class="mobile-menu-overlay" onclick="closeMobileMenu()"></div>
    <div class="mobile-menu-body">
      <button class="mobile-menu-close" aria-label="メニューを閉じる" onclick="closeMobileMenu()">&times;</button>
      <nav aria-label="モバイルナビゲーション">
        <ul class="mobile-menu-nav">
          ${menuItems}
        </ul>
      </nav>
      <div class="mobile-menu-tel">
        <a href="tel:${SITE.telRaw}">${SITE.tel}<small>24時間受付・電話見積り無料</small></a>
      </div>
    </div>
  </div>`;
}

// --- Contact CTA Section ---
function renderContactCTA() {
  return `
  <section id="contact" class="sec-contact">
    <div class="container">
      <h2>お問い合わせ</h2>
      <p>蜂の巣の駆除は、${SITE.nameShort}にご相談ください。<br>料金は全て事前にお伝えします。</p>
      <div class="contact-cta-buttons">
        <a href="tel:${SITE.telRaw}" class="btn-tel btn-tel-large">
          電話する ${SITE.tel}
          <small>24時間受付・電話見積り無料</small>
        </a>
        <a href="${LINE.url}" class="btn-line btn-line-large" target="_blank" rel="noopener">
          ${LINE_ICON}
          <span class="btn-line-text">${LINE.label}<small>友だち追加で写真相談OK</small></span>
        </a>
      </div>
      <p class="contact-sub"><a href="contact.html">お問い合わせフォームはこちら</a></p>
      <p class="info-row">
        ${SITE.name} ｜ ${SITE.address} ｜ ${SITE.hours}
      </p>
    </div>
  </section>`;
}

// --- Footer ---
function renderFooter() {
  const footerLinks = NAV_ITEMS.map(item =>
    `<li><a href="${item.href}">${item.label}</a></li>`
  ).join('\n            ');

  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-info">
          <h4>${SITE.name}</h4>
          <p>${SITE.address}</p>
          <p>TEL: <a href="tel:${SITE.telRaw}" style="color:#333;padding:8px 0;display:inline-block;">${SITE.tel}</a></p>
          <p>営業時間: 24時間 / 年中無休</p>
        </div>
        <nav class="footer-nav" aria-label="フッターナビ">
          <ul>
            ${footerLinks}
          </ul>
        </nav>
      </div>
      <p class="footer-copy">&copy; ${SITE.name} All Rights Reserved.</p>
    </div>
  </footer>`;
}

// --- Mobile Fixed CTA ---
function renderMobileFixedCTA() {
  return `
  <div class="sp-fixed-cta">
    <a href="tel:${SITE.telRaw}" class="sp-btn-tel">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      <span>電話する</span>
    </a>
    <a href="${LINE.url}" class="sp-btn-line" target="_blank" rel="noopener">
      ${LINE_ICON}
      <span>LINE</span>
    </a>
    <a href="contact.html" class="sp-btn-contact">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      <span>フォーム</span>
    </a>
  </div>`;
}

// --- Mobile Menu Open/Close (a11y) ---
let _mobileMenuPrevFocus = null;
let _mobileMenuKeyHandler = null;

function openMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.querySelector('.header-hamburger');
  if (!menu || menu.classList.contains('is-open')) return;

  // 念のため既存ハンドラを除去（再入時のリーク防止）
  if (_mobileMenuKeyHandler) {
    document.removeEventListener('keydown', _mobileMenuKeyHandler);
    _mobileMenuKeyHandler = null;
  }

  _mobileMenuPrevFocus = document.activeElement;
  menu.classList.add('is-open');
  menu.setAttribute('aria-hidden', 'false');
  if (btn) btn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';

  // 初期フォーカスを最初のリンクへ
  const firstLink = menu.querySelector('.mobile-menu-nav a');
  if (firstLink) firstLink.focus();

  // Esc / Tab ハンドラ（フォーカストラップ）
  _mobileMenuKeyHandler = function(e) {
    if (!menu.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      closeMobileMenu();
      return;
    }
    if (e.key === 'Tab') {
      const focusable = menu.querySelectorAll('a[href], button:not([disabled])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };
  document.addEventListener('keydown', _mobileMenuKeyHandler);
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.querySelector('.header-hamburger');
  if (menu) {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
  }
  if (btn) btn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';

  if (_mobileMenuKeyHandler) {
    document.removeEventListener('keydown', _mobileMenuKeyHandler);
    _mobileMenuKeyHandler = null;
  }
  // 元のフォーカス位置に戻す（body などの場合はhamburgerへ）
  const restoreTarget = (_mobileMenuPrevFocus && _mobileMenuPrevFocus !== document.body)
    ? _mobileMenuPrevFocus
    : btn;
  if (restoreTarget && typeof restoreTarget.focus === 'function') {
    restoreTarget.focus();
  }
  _mobileMenuPrevFocus = null;
}

// --- Inject Components ---
document.addEventListener('DOMContentLoaded', function() {
  const headerEl = document.getElementById('component-header');
  const menuEl = document.getElementById('component-mobile-menu');
  const ctaEl = document.getElementById('component-contact-cta');
  const footerEl = document.getElementById('component-footer');
  const fixedCtaEl = document.getElementById('component-fixed-cta');

  if (headerEl) headerEl.outerHTML = renderHeader();
  if (menuEl) menuEl.outerHTML = renderMobileMenu();
  if (ctaEl) ctaEl.outerHTML = renderContactCTA();
  if (footerEl) footerEl.outerHTML = renderFooter();
  if (fixedCtaEl) fixedCtaEl.outerHTML = renderMobileFixedCTA();
});
