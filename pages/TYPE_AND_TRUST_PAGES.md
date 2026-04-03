# 蜂の種類別ページ + 信頼構築ページ 詳細制作案

**対象サイト**: https://www.hachikujyo-arai.com/（蜂駆除あらい）  
**作成日**: 2026-04-02  
**コンセプト**: 「福岡市の蜂駆除屋あらいです。料金は全部お伝えします。」  
**差別化軸**: 地域密着 × 代表の顔 × 料金透明性

---

# Part 1: 蜂の種類別ページ（3ページ）

---

## 1-1. スズメバチの駆除ページ

### 基本設定

| 項目 | 内容 |
|------|------|
| URL | `/bee-type/suzumebachi/` |
| title | `福岡市のスズメバチ駆除｜料金22,000円〜・即日対応｜蜂駆除あらい` |
| meta description | `福岡市のスズメバチ駆除なら蜂駆除あらい。料金は22,000円〜55,000円（税込・季節別）で追加料金も全て事前にお伝えします。オオスズメバチ・キイロスズメバチなど全種類に対応。24時間365日受付、最短即日で駆けつけます。090-8451-0837` |
| H1 | `福岡市のスズメバチ駆除` |

### セクション構成

---

#### セクション1: H1 + 危険度表示

```
<section class="bee-hero">

  <h1>福岡市のスズメバチ駆除</h1>
  
  <div class="danger-badge danger-level-5">
    <span class="danger-label">危険度</span>
    <span class="danger-stars">★★★★★</span>
    <span class="danger-text">最高レベル — 絶対に近づかないでください</span>
  </div>

  <p class="hero-copy">
    スズメバチの巣を見つけたら、<strong>絶対に自分で駆除しようとしないでください。</strong><br>
    毎年、日本では蜂刺されにより約20名が亡くなっています。<br>
    そのほとんどがスズメバチによるものです。
  </p>

  <div class="hero-cta">
    <a href="tel:09084510837" class="btn-tel">
      <span class="btn-tel-label">今すぐお電話ください</span>
      <span class="btn-tel-number">090-8451-0837</span>
      <span class="btn-tel-note">24時間受付・通話無料見積もり</span>
    </a>
  </div>

</section>
```

---

#### セクション2: この蜂の特徴

```
<section class="bee-features">

  <h2>スズメバチの特徴</h2>
  
  <p>
    スズメバチは日本に生息する蜂の中で<strong>最も危険な種類</strong>です。
    福岡市では主に「キイロスズメバチ」「コガタスズメバチ」「オオスズメバチ」の3種が
    多く確認されています。攻撃性が非常に高く、巣に近づいただけで
    集団で襲ってくることがあります。
  </p>

  <div class="bee-spec-table">
    <h3>スズメバチの種類と基本データ</h3>
    
    <table>
      <thead>
        <tr>
          <th>種類</th>
          <th>体長（働きバチ）</th>
          <th>体の色</th>
          <th>攻撃性</th>
          <th>営巣場所</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>オオスズメバチ</td>
          <td>27〜38mm（女王バチ40〜45mm）</td>
          <td>オレンジ褐色と黒の縞模様</td>
          <td>★★★★★（極めて凶暴）</td>
          <td>土の中・木の根元・樹洞</td>
        </tr>
        <tr>
          <td>キイロスズメバチ</td>
          <td>17〜28mm</td>
          <td>黄色が強い縞模様</td>
          <td>★★★★（非常に攻撃的）</td>
          <td>軒下・天井裏・壁の中・木の枝</td>
        </tr>
        <tr>
          <td>コガタスズメバチ</td>
          <td>22〜30mm</td>
          <td>黒と黄褐色の縞模様</td>
          <td>★★★（比較的おとなしい）</td>
          <td>庭木の枝・軒下・植え込み</td>
        </tr>
        <tr>
          <td>ヒメスズメバチ</td>
          <td>24〜37mm</td>
          <td>黒と褐色の縞模様、腹端が黒</td>
          <td>★★（おとなしい）</td>
          <td>天井裏・床下・壁の中</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bee-feature-detail">
    <h3>福岡市で特に多いスズメバチ</h3>
    <p>
      福岡市内で最も多く駆除依頼をいただくのは<strong>キイロスズメバチ</strong>です。
      住宅の軒下や天井裏に巣を作りやすく、巣の成長が早いのが特徴です。
      6月から急速に巣が大きくなり、8〜9月には直径40cm以上になることもあります。
    </p>
    <p>
      <strong>オオスズメバチ</strong>は土の中に巣を作るため発見が遅れやすく、
      庭仕事や草刈り中に巣を踏んで刺される被害が多発します。
      体長4cm以上、毒針の長さは6mmにもなり、日本最大・最強の蜂です。
    </p>
  </div>
  
  <!-- 写真エリア -->
  <div class="bee-photo-grid">
    [オオスズメバチの写真] [キイロスズメバチの写真] [コガタスズメバチの写真]
  </div>

</section>
```

**活動時期**:
- 4〜5月: 女王バチが単独で巣作り開始。巣は徳利型で小さい（5cm程度）
- 6〜7月: 働きバチが増加。巣はソフトボール大に成長
- 8〜9月: 巣がバレーボール〜バスケットボール大に。働きバチ数百匹
- 9〜10月: 攻撃性が最高潮。巣は最大で直径60cm超。新女王バチの生産期
- 11月: 活動終了。女王バチのみ越冬、他は死滅

---

#### セクション3: 巣の見分け方

```
<section class="nest-identify">

  <h2>スズメバチの巣の見分け方</h2>

  <p>
    スズメバチの巣は時期によって形が大きく変わります。<br>
    <strong>「これはスズメバチの巣かも？」と思ったら、近づかずにすぐお電話ください。</strong>
  </p>

  <div class="nest-stages">
  
    <div class="nest-stage">
      <h3>初期の巣（4〜5月）</h3>
      [写真: 徳利型の巣]
      <ul>
        <li>大きさ: 5〜10cm程度</li>
        <li>形: <strong>徳利（とっくり）を逆さにしたような形</strong></li>
        <li>色: 灰色〜茶色のマーブル模様</li>
        <li>蜂の数: 女王バチ1匹のみ</li>
        <li>場所: 軒下、ベランダの天井、物置の中</li>
      </ul>
      <p class="nest-note">
        ※この段階が最も駆除しやすい時期です。見つけたらすぐにご連絡ください。
      </p>
    </div>

    <div class="nest-stage">
      <h3>成長期の巣（6〜7月）</h3>
      [写真: ソフトボール大の巣]
      <ul>
        <li>大きさ: 10〜20cm（ソフトボール大）</li>
        <li>形: <strong>球状で、表面にマーブル模様</strong></li>
        <li>色: 灰色〜茶色</li>
        <li>蜂の数: 数十匹の働きバチ</li>
        <li>出入口: 巣の下部に1つの穴</li>
      </ul>
    </div>

    <div class="nest-stage">
      <h3>最盛期の巣（8〜10月）</h3>
      [写真: バスケットボール大の巣]
      <ul>
        <li>大きさ: 30〜60cm以上（バスケットボール大〜それ以上）</li>
        <li>形: <strong>大きな球状、何層にも重なるマーブル模様</strong></li>
        <li>蜂の数: 数百匹〜数千匹</li>
        <li>攻撃性: <strong>極めて高い。巣から5〜10m離れていても攻撃される可能性</strong></li>
      </ul>
      <p class="nest-warning">
        ⚠ この大きさの巣には絶対に近づかないでください。命に関わります。
      </p>
    </div>

  </div>

  <div class="nest-location">
    <h3>福岡市でスズメバチの巣がよく見つかる場所</h3>
    <ul>
      <li>住宅の軒下・屋根裏・天井裏</li>
      <li>ベランダの天井部分</li>
      <li>庭木の中・植え込みの中</li>
      <li>土の中・木の根元（オオスズメバチ）</li>
      <li>物置・倉庫の中</li>
      <li>戸袋・雨戸の裏</li>
      <li>エアコンの室外機周辺</li>
    </ul>
  </div>

</section>
```

---

#### セクション4: 危険性の解説

```
<section class="bee-danger">

  <h2>スズメバチに刺された場合の危険性</h2>

  <div class="danger-intro">
    <p>
      スズメバチの毒は非常に強力で、<strong>1回刺されただけでも激しい痛みと腫れ</strong>が
      生じます。さらに恐ろしいのは、2回目以降に刺された場合に起こりうる
      <strong>アナフィラキシーショック</strong>です。
    </p>
  </div>

  <div class="symptom-list">
    <h3>刺された直後の症状</h3>
    <ul>
      <li>刺された部分に激しい痛み</li>
      <li>刺された箇所が赤く腫れ上がり、熱を持つ</li>
      <li>15分以内に腫れが広がる</li>
      <li>初めてであれば通常1日〜数日で症状は落ち着く</li>
    </ul>

    <h3>アナフィラキシーショックの症状（刺されて数分〜15分以内に発症）</h3>
    <div class="warning-box">
      <p><strong>以下の症状が1つでも出たら、ためらわず119番通報してください。</strong></p>
      <ul>
        <li>全身のじんましん・かゆみ</li>
        <li>唇や口腔内・のどの腫れ</li>
        <li>息苦しさ・呼吸困難</li>
        <li>めまい・意識がもうろうとする</li>
        <li>血圧低下・冷や汗</li>
        <li>吐き気・嘔吐</li>
        <li>手足のしびれ</li>
      </ul>
    </div>
    <p>
      蜂に刺されると、蜂毒により免疫反応が起き、10〜20%の人が「感作」された状態になります。
      感作された人が再び刺されると、そのうち約20%がアナフィラキシーを発症し、
      <strong>最悪の場合、数分で命を落とすこともあります。</strong>
    </p>

    <h3>応急処置の手順</h3>
    <ol>
      <li>まず安全な場所に避難する（巣から離れる）</li>
      <li>針が残っている場合は、ピンセット等でそっと抜く（指でつまむと毒が入る）</li>
      <li>傷口を流水でよく洗い流し、毒を絞り出す</li>
      <li>抗ヒスタミン軟膏を塗り、患部を冷やす</li>
      <li>全身症状が出たら直ちに119番通報</li>
    </ol>
  </div>

  <div class="danger-message">
    <p>
      <strong>「たかが蜂」と思わないでください。</strong><br>
      日本では毎年約20名が蜂刺されで亡くなっています。
      スズメバチの巣を見つけたら、ご自身やご家族の安全のために、
      すぐにプロの駆除業者にご連絡ください。
    </p>
  </div>

</section>
```

---

#### セクション5: 駆除方法と料金

```
<section class="extermination-price">

  <h2>スズメバチの駆除方法と料金</h2>

  <div class="method">
    <h3>蜂駆除あらいのスズメバチ駆除の流れ</h3>
    <ol>
      <li>
        <strong>お電話でのヒアリング</strong><br>
        蜂の種類（わかる範囲で）、巣の場所、大きさをお聞きし、概算料金をお伝えします。
        写真を送っていただければ、より正確なお見積もりが可能です。
      </li>
      <li>
        <strong>現地調査・お見積もり</strong><br>
        現地で巣の状況を確認し、正確な料金をお伝えします。
        <strong>お見積もり後のキャンセルは無料です。</strong>
      </li>
      <li>
        <strong>駆除作業</strong><br>
        防護服を着用し、専用の薬剤（ピレスロイド系）を使用して駆除します。
        巣の完全撤去まで行います。作業時間は30分〜1時間程度です。
      </li>
      <li>
        <strong>完了確認・清掃</strong><br>
        駆除完了後、巣の跡の清掃を行い、お客様に確認いただきます。
        戻りバチ対策のアドバイスもお伝えします。
      </li>
    </ol>
  </div>

  <div class="price-table">
    <h3>スズメバチ駆除の料金表（税込）</h3>
    <p class="price-note">
      蜂駆除あらいでは、季節ごとの料金を事前に公開しています。<br>
      <strong>「結局いくらかかるの？」という不安をゼロにします。</strong>
    </p>
    
    <table>
      <thead>
        <tr>
          <th>種類</th>
          <th>11〜5月</th>
          <th>6月</th>
          <th>7〜9月（ピーク）</th>
          <th>10月</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>スズメバチ</td>
          <td>22,000円</td>
          <td>27,500円</td>
          <td><strong>33,000円</strong></td>
          <td>27,500円</td>
        </tr>
        <tr>
          <td>オオスズメバチ</td>
          <td>33,000円</td>
          <td>44,000円</td>
          <td><strong>55,000円</strong></td>
          <td>44,000円</td>
        </tr>
      </tbody>
    </table>

    <h4>追加料金が発生するケース</h4>
    <table>
      <thead>
        <tr>
          <th>条件</th>
          <th>追加料金（税込）</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>現地調査費</td><td>11,000円</td></tr>
        <tr><td>高所作業（2階以上など）</td><td>5,500〜11,000円</td></tr>
        <tr><td>屋根裏での作業</td><td>11,000円</td></tr>
        <tr><td>地中の巣の駆除</td><td>11,000円</td></tr>
      </tbody>
    </table>

    <p class="price-promise">
      <strong>これ以外の追加料金は一切いただきません。</strong><br>
      お電話の段階で「合計でいくらくらいになるか」をお伝えしますので、ご安心ください。
    </p>
  </div>

</section>
```

---

#### セクション6: 施工事例

```
<section class="case-studies">

  <h2>スズメバチの駆除事例（福岡市）</h2>

  <p>
    蜂駆除あらいが実際に対応した、福岡市内でのスズメバチ駆除事例をご紹介します。
  </p>

  <!-- 事例カード ×3〜4件 -->
  <div class="case-card">
    <div class="case-photos">
      [ビフォー写真] → [アフター写真]
    </div>
    <div class="case-detail">
      <h3>久留米市 K様邸 — 軒下のキイロスズメバチの巣</h3>
      <table>
        <tr><td>蜂の種類</td><td>キイロスズメバチ</td></tr>
        <tr><td>巣の場所</td><td>2階の軒下</td></tr>
        <tr><td>巣の大きさ</td><td>約25cm（バレーボール大）</td></tr>
        <tr><td>作業時間</td><td>約40分</td></tr>
        <tr><td>料金</td><td>33,000円 + 高所作業 5,500円 = <strong>38,500円（税込）</strong></td></tr>
        <tr><td>時期</td><td>8月</td></tr>
      </table>
      <div class="case-voice">
        <p>
          「洗濯物を干そうとしたら、軒下に大きな蜂の巣があってびっくりしました。
          あらいさんに電話したら、その日のうちに来てくれて、
          料金も電話で言われた通りでした。ありがとうございました。」
          <span class="voice-attr">— K様（久留米市・戸建て）</span>
        </p>
      </div>
    </div>
  </div>

  <!-- 追加事例のスロット -->
  <p class="case-more">
    <a href="/case/?type=suzumebachi">スズメバチの駆除事例をもっと見る →</a>
  </p>

</section>
```

---

#### セクション7: 「自分で駆除は危険です」→ CTA

```
<section class="self-danger-cta">

  <h2>スズメバチの巣を自分で駆除するのは絶対にやめてください</h2>

  <div class="danger-reasons">
    <p>
      インターネットには「スズメバチの巣を自分で駆除する方法」という情報がありますが、
      <strong>プロの駆除業者として、自力での駆除は絶対におすすめしません。</strong>
    </p>

    <h3>自力駆除が危険な3つの理由</h3>
    <ol>
      <li>
        <strong>防護服なしでは命に関わります</strong><br>
        市販の厚手の服では、スズメバチの6mmの毒針を防げません。
        プロ用の防護服でも刺されることがあるほど、スズメバチの攻撃力は強力です。
      </li>
      <li>
        <strong>1匹が刺すと集団で襲ってきます</strong><br>
        スズメバチは刺す際に「警報フェロモン」を放出します。
        これにより巣の仲間が一斉に攻撃態勢に入り、数十匹〜数百匹に囲まれます。
      </li>
      <li>
        <strong>不完全な駆除は再発を招きます</strong><br>
        巣の撤去が不完全だと、残った蜂が同じ場所に巣を再建します。
        また、薬剤の使い方を間違えると蜂が興奮してさらに攻撃的になります。
      </li>
    </ol>
  </div>

  <div class="cta-block">
    <p class="cta-lead">
      蜂駆除あらいは<strong>24時間365日</strong>、お電話を受け付けています。<br>
      「巣がある場所」と「蜂の様子」を教えていただければ、<br>
      <strong>電話口で概算料金をお伝えします。</strong>
    </p>
    <a href="tel:09084510837" class="btn-tel-large">
      <span>今すぐ電話する</span>
      <span class="tel-number">090-8451-0837</span>
    </a>
    <p class="cta-sub">
      <a href="/contact/">メールでのお問い合わせはこちら</a>
      ｜ 対応エリア: 福岡県・佐賀県・熊本県
    </p>
  </div>

</section>
```

---

#### セクション8: 季節別の注意事項

```
<section class="seasonal-tips">

  <h2>スズメバチの季節別注意事項</h2>

  <div class="season-timeline">

    <div class="season-block season-spring">
      <h3>春（4〜5月）— 巣作り開始期</h3>
      <ul>
        <li>女王バチが1匹で巣作りを開始する時期</li>
        <li>巣は5〜10cmの徳利型で、まだ小さい</li>
        <li><strong>この時期に発見・駆除できれば、費用も安く済みます</strong></li>
        <li>軒下やベランダの天井を定期的にチェックしましょう</li>
      </ul>
      <p class="season-advice">
        💡 ベランダや軒下に蜂が1匹で何度も出入りしていたら、巣作りの兆候です。
        早めにご連絡ください。
      </p>
    </div>

    <div class="season-block season-summer">
      <h3>夏（6〜8月）— 急成長期・被害増加</h3>
      <ul>
        <li>働きバチが急増し、巣が一気に大きくなる</li>
        <li>6月にはソフトボール大、8月にはバスケットボール大に</li>
        <li>蜂の飛来回数が急増し、洗濯物や庭作業中の被害が多発</li>
        <li><strong>「巣が小さいうちに」と思っても、1週間で一回り大きくなります</strong></li>
      </ul>
      <p class="season-advice">
        💡 蜂が頻繁に飛んでいる場所の近くに巣がある可能性大。
        「まだ小さいから」と放置せず、すぐにご相談ください。
      </p>
    </div>

    <div class="season-block season-autumn">
      <h3>秋（9〜10月）— 攻撃性MAX・最も危険な時期</h3>
      <ul>
        <li>巣の規模がピーク。働きバチは数百〜数千匹</li>
        <li><strong>攻撃性が1年で最も高い時期</strong>（新女王バチを守るため）</li>
        <li>巣から5〜10m離れていても攻撃される場合あり</li>
        <li>ハイキングや草刈り中の被害が急増</li>
      </ul>
      <p class="season-advice">
        ⚠ 黒い服・香水・甘い飲み物に蜂が寄ってきます。
        屋外では白っぽい服装を心がけてください。
      </p>
    </div>

    <div class="season-block season-winter">
      <h3>冬（11〜3月）— 活動終了・来春の予防</h3>
      <ul>
        <li>働きバチはすべて死滅。新女王バチのみ土の中で越冬</li>
        <li>空の巣が残っていても再利用はされない（ただし同じ場所に来年も巣を作ることがある）</li>
        <li><strong>冬の間に古い巣を撤去し、来春の予防をするのがおすすめ</strong></li>
      </ul>
      <p class="season-advice">
        💡 「冬だから大丈夫」と思っても、暖冬の年は3月後半から活動開始することも。
        巣の跡がある場所は要注意です。
      </p>
    </div>

  </div>

</section>
```

---

#### 必要な画像素材リスト（スズメバチページ）

| # | 画像 | 用途 | 撮影・取得方法 |
|---|------|------|-------------|
| 1 | オオスズメバチの写真（正面・横） | 種類の特徴セクション | 自社撮影 or ストック素材 |
| 2 | キイロスズメバチの写真 | 種類の特徴セクション | 自社撮影 or ストック素材 |
| 3 | コガタスズメバチの写真 | 種類の特徴セクション | 自社撮影 or ストック素材 |
| 4 | 初期の巣（徳利型）の写真 | 巣の見分け方セクション | 施工時に撮影（uploads内に候補あり） |
| 5 | 成長期の巣（ソフトボール大）の写真 | 巣の見分け方セクション | 施工時に撮影 |
| 6 | 最盛期の巣（大型）の写真 | 巣の見分け方セクション | 施工時に撮影 |
| 7 | 駆除作業中の写真（防護服着用） | 駆除方法セクション | 自社撮影 |
| 8 | ビフォーアフター写真（施工事例用）×3〜4セット | 施工事例セクション | uploads内の約60枚から選定 |
| 9 | 季節ごとの巣のサイズ比較イラスト | 季節別注意事項 | イラスト作成 |
| 10 | 蜂が巣を作りやすい場所の図解 | 巣の見分け方セクション | イラスト作成 |

---

#### 構造化データ（スズメバチページ）

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "福岡市のスズメバチ駆除",
  "description": "福岡市のスズメバチ駆除なら蜂駆除あらい。料金22,000円〜55,000円（税込・季節別）。24時間365日対応。",
  "provider": {
    "@type": "LocalBusiness",
    "name": "蜂駆除あらい",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "久留米市",
      "addressRegion": "福岡県",
      "postalCode": "830-0001",
      "streetAddress": "小森野6丁目18-27",
      "addressCountry": "JP"
    },
    "telephone": "090-8451-0837",
    "url": "https://www.hachikujyo-arai.com/",
    "openingHours": "Mo-Su 00:00-24:00"
  },
  "areaServed": {
    "@type": "City",
    "name": "福岡市"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "JPY",
    "price": "22000",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "22000",
      "maxPrice": "55000",
      "priceCurrency": "JPY"
    }
  }
}
```

---
---

## 1-2. アシナガバチの駆除ページ

### 基本設定

| 項目 | 内容 |
|------|------|
| URL | `/bee-type/ashinagabachi/` |
| title | `福岡市のアシナガバチ駆除｜料金11,000円〜・即日対応｜蜂駆除あらい` |
| meta description | `福岡市のアシナガバチ駆除なら蜂駆除あらい。料金は11,000円〜22,000円（税込・季節別）で追加料金も全て事前にお伝えします。ベランダ・軒下・エアコン室外機の巣も対応。24時間365日受付。090-8451-0837` |
| H1 | `福岡市のアシナガバチ駆除` |

### セクション構成

---

#### セクション1: H1 + 危険度表示

```
<section class="bee-hero">

  <h1>福岡市のアシナガバチ駆除</h1>
  
  <div class="danger-badge danger-level-3">
    <span class="danger-label">危険度</span>
    <span class="danger-stars">★★★☆☆</span>
    <span class="danger-text">中程度 — おとなしいが刺激すると集団で攻撃</span>
  </div>

  <p class="hero-copy">
    アシナガバチはスズメバチほど凶暴ではありませんが、<br>
    <strong>巣を刺激すると一斉に攻撃してきます。</strong><br>
    ベランダの軒下やエアコン室外機の裏など、
    生活空間に巣を作りやすい蜂です。
  </p>

  <div class="hero-cta">
    <a href="tel:09084510837" class="btn-tel">
      <span class="btn-tel-label">まずはお電話ください</span>
      <span class="btn-tel-number">090-8451-0837</span>
      <span class="btn-tel-note">24時間受付・概算料金をお伝えします</span>
    </a>
  </div>

</section>
```

---

#### セクション2: この蜂の特徴

```
<section class="bee-features">

  <h2>アシナガバチの特徴</h2>
  
  <p>
    アシナガバチはスズメバチの仲間ですが、体が細く、
    <strong>長い後ろ脚を垂らしてゆっくり飛ぶ</strong>のが特徴です。
    名前の通り「足が長い蜂」で、スズメバチに比べるとおとなしい性格ですが、
    巣に近づいたり刺激を与えると集団で攻撃してきます。
  </p>

  <div class="bee-spec-table">
    <h3>アシナガバチの種類と基本データ</h3>
    
    <table>
      <thead>
        <tr>
          <th>種類</th>
          <th>体長</th>
          <th>体の色</th>
          <th>攻撃性</th>
          <th>よく巣を作る場所</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>セグロアシナガバチ</td>
          <td>20〜26mm</td>
          <td>黒地に黄色の縞模様</td>
          <td>★★★（やや攻撃的）</td>
          <td>軒下・ベランダ・庭木</td>
        </tr>
        <tr>
          <td>フタモンアシナガバチ</td>
          <td>14〜18mm</td>
          <td>黄色が強い、腹部に黒点2つ</td>
          <td>★★（比較的おとなしい）</td>
          <td>室外機・物干し竿・植え込み</td>
        </tr>
        <tr>
          <td>コアシナガバチ</td>
          <td>11〜17mm</td>
          <td>黄褐色と黒の縞模様</td>
          <td>★★（おとなしい）</td>
          <td>草むら・低い木・ブロック塀</td>
        </tr>
        <tr>
          <td>キアシナガバチ</td>
          <td>20〜26mm</td>
          <td>黒地に鮮やかな黄色の模様</td>
          <td>★★★（やや攻撃的）</td>
          <td>軒下・天井裏・木の枝</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bee-feature-detail">
    <h3>スズメバチとの見分け方</h3>
    <p>
      アシナガバチとスズメバチは一見似ていますが、以下の点で見分けられます。
    </p>
    <table>
      <thead>
        <tr><th>特徴</th><th>アシナガバチ</th><th>スズメバチ</th></tr>
      </thead>
      <tbody>
        <tr><td>体型</td><td>細長く、くびれが目立つ</td><td>太くてがっしり</td></tr>
        <tr><td>飛び方</td><td>後ろ脚を垂らしてゆっくり</td><td>直線的で素早い</td></tr>
        <tr><td>巣の形</td><td>シャワーヘッド型（穴がむき出し）</td><td>球状（マーブル模様の外壁）</td></tr>
        <tr><td>巣の大きさ</td><td>最大15cm程度</td><td>最大60cm以上</td></tr>
      </tbody>
    </table>
    <p class="note">
      <strong>判断に迷ったらお電話ください。</strong>写真を送っていただければ種類をお伝えします。
    </p>
  </div>

</section>
```

**活動時期**:
- 4月: 女王バチが単独で巣作り開始
- 5〜6月: 働きバチが羽化し始める。巣は3〜5cm
- 7〜9月: 活動のピーク。巣は10〜15cm。働きバチ数十匹。攻撃性も高まる
- 10月: 新女王バチが生まれ、交尾後に越冬準備
- 11月以降: 巣は空になる。新女王バチのみ木の皮の裏などで越冬

---

#### セクション3: 巣の見分け方

```
<section class="nest-identify">

  <h2>アシナガバチの巣の見分け方</h2>

  <p>
    アシナガバチの巣は<strong>「シャワーヘッド」のような形</strong>をしています。
    六角形の巣穴がむき出しで、スズメバチのように外壁で覆われていません。
    そのため巣の内部が直接見え、幼虫や卵が確認できることもあります。
  </p>

  <div class="nest-detail">
    <h3>巣の特徴</h3>
    [写真: アシナガバチの巣]
    <ul>
      <li>形: シャワーヘッド型・お椀を逆さにしたような形</li>
      <li>大きさ: 最大で直径15cm程度（手のひらサイズ）</li>
      <li>色: 灰色〜薄茶色</li>
      <li>構造: 六角形の巣穴がむき出し（外壁がない）</li>
      <li>取り付け: 1本の柄で吊り下がっている</li>
    </ul>

    <h3>福岡市でアシナガバチの巣がよく見つかる場所</h3>
    <ul>
      <li><strong>ベランダの天井・手すり裏</strong>（最多。洗濯物との接触で刺される被害多数）</li>
      <li><strong>エアコンの室外機の裏・下</strong></li>
      <li>軒下・雨どいの裏</li>
      <li>窓枠・サッシの隙間</li>
      <li>庭木・植え込みの中</li>
      <li>物干し竿の端・パイプの中</li>
      <li>ガスメーター・電気メーターの裏</li>
      <li>自転車のサドル裏・ヘルメットの中</li>
    </ul>
  </div>

  <div class="nest-warning">
    <p>
      ⚠ アシナガバチの巣は小さく目立たないため、
      <strong>気づかずに触れてしまい刺される被害</strong>が非常に多いです。
      特にベランダの手すりや室外機の周辺は要注意です。
    </p>
  </div>

</section>
```

---

#### セクション4: 危険性の解説

```
<section class="bee-danger">

  <h2>アシナガバチに刺された場合の危険性</h2>

  <p>
    アシナガバチの毒はスズメバチより弱いものの、<strong>成分が似ている</strong>ため、
    スズメバチに刺された経験がある方は<strong>アナフィラキシーショックのリスクが高まります</strong>
    （交差反応）。
  </p>

  <div class="symptom-list">
    <h3>刺された場合の症状</h3>
    <ul>
      <li>刺された部分にチクッとした鋭い痛み</li>
      <li>赤く腫れ、かゆみが数日続く</li>
      <li>スズメバチに比べると腫れは軽いが、個人差が大きい</li>
    </ul>

    <h3>注意すべき人</h3>
    <ul>
      <li>過去にスズメバチ・アシナガバチに刺された経験がある方</li>
      <li>アレルギー体質の方</li>
      <li>お子様・高齢者の方</li>
    </ul>

    <p>
      アシナガバチは「おとなしいから大丈夫」と思われがちですが、
      巣を刺激すると<strong>巣にいる全ての働きバチが一斉に攻撃してきます</strong>。
      特にお子様が知らずに巣を触ってしまう事故が多いため、
      巣を見つけたら早めの駆除をおすすめします。
    </p>
  </div>

</section>
```

---

#### セクション5: 駆除方法と料金

```
<section class="extermination-price">

  <h2>アシナガバチの駆除方法と料金</h2>

  <div class="method">
    <h3>アシナガバチの駆除のポイント</h3>
    <p>
      アシナガバチの巣は外壁がなく露出しているため、
      薬剤が直接かかりやすく、スズメバチに比べて駆除しやすいのが特徴です。
      ただし、高所やエアコン室外機の裏など手が届きにくい場所にある場合は、
      安全のためプロにお任せください。
    </p>
  </div>

  <div class="price-table">
    <h3>アシナガバチ駆除の料金表（税込）</h3>
    
    <table>
      <thead>
        <tr>
          <th>蜂の種類</th>
          <th>11〜5月</th>
          <th>6月</th>
          <th>7〜9月（ピーク）</th>
          <th>10月</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>アシナガバチ</td>
          <td>11,000円</td>
          <td>16,500円</td>
          <td><strong>22,000円</strong></td>
          <td>16,500円</td>
        </tr>
      </tbody>
    </table>

    <p class="price-comparison">
      <strong>「あのサイトは3,000円〜って書いてあったけど...」</strong><br>
      他社サイトの「3,000円〜」は最も小さい巣・最も簡単な条件の場合の最低価格です。
      実際には出張費・作業費・処分費などの追加で、最終的に2〜3万円になるケースがほとんどです。<br>
      蜂駆除あらいは<strong>「結局いくらかかるのか」を最初からお伝えします。</strong>
    </p>
  </div>

</section>
```

---

#### セクション6〜8

スズメバチページと同様の構成で、以下の内容を反映:

- **セクション6（施工事例）**: アシナガバチの駆除事例（ベランダ・室外機裏など）
- **セクション7（CTA）**: 「小さい巣だから大丈夫」と思わず、早めにご相談を、の訴求
- **セクション8（季節別注意事項）**: 4〜5月の初期駆除の推奨、7〜9月の洗濯物被害注意

---

#### 必要な画像素材リスト（アシナガバチページ）

| # | 画像 | 用途 |
|---|------|------|
| 1 | セグロアシナガバチの写真 | 種類の特徴 |
| 2 | フタモンアシナガバチの写真 | 種類の特徴 |
| 3 | アシナガバチの巣（シャワーヘッド型）の写真 | 巣の見分け方 |
| 4 | ベランダの天井にできた巣の写真 | 巣の見分け方 |
| 5 | 室外機裏の巣の写真 | 巣の見分け方 |
| 6 | アシナガバチとスズメバチの比較写真 | 見分け方セクション |
| 7 | ビフォーアフター写真 ×3セット | 施工事例 |

---

#### 構造化データ（アシナガバチページ）

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "福岡市のアシナガバチ駆除",
  "description": "福岡市のアシナガバチ駆除なら蜂駆除あらい。料金11,000円〜22,000円（税込・季節別）。24時間365日対応。",
  "provider": {
    "@type": "LocalBusiness",
    "name": "蜂駆除あらい",
    "telephone": "090-8451-0837",
    "url": "https://www.hachikujyo-arai.com/"
  },
  "areaServed": {
    "@type": "City",
    "name": "福岡市"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "JPY",
    "price": "11000",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "11000",
      "maxPrice": "22000",
      "priceCurrency": "JPY"
    }
  }
}
```

---
---

## 1-3. ミツバチの駆除ページ

### 基本設定

| 項目 | 内容 |
|------|------|
| URL | `/bee-type/mitsubachi/` |
| title | `福岡市のミツバチ駆除｜料金11,000円〜・蜜の清掃も対応｜蜂駆除あらい` |
| meta description | `福岡市のミツバチ駆除・ミツバチの巣の撤去なら蜂駆除あらい。料金は11,000円〜22,000円（税込・季節別）。ミツバチの巣は放置すると蜜が垂れて建物を傷めます。巣の撤去から蜜の清掃まで対応。24時間365日受付。090-8451-0837` |
| H1 | `福岡市のミツバチ駆除・巣の撤去` |

### セクション構成

---

#### セクション1: H1 + 危険度表示

```
<section class="bee-hero">

  <h1>福岡市のミツバチ駆除・巣の撤去</h1>
  
  <div class="danger-badge danger-level-2">
    <span class="danger-label">危険度</span>
    <span class="danger-stars">★★☆☆☆</span>
    <span class="danger-text">低〜中 — おとなしいが、巣の撤去にはプロの技術が必要</span>
  </div>

  <p class="hero-copy">
    ミツバチはおとなしい蜂ですが、巣を放置すると<strong>蜜が垂れて天井や壁にシミ</strong>ができ、
    建物を傷めてしまいます。また、蜜に誘われて<strong>ゴキブリやアリなどの害虫</strong>が
    集まる原因にもなります。<br>
    巣の撤去から蜜の清掃まで、蜂駆除あらいにお任せください。
  </p>

  <div class="hero-cta">
    <a href="tel:09084510837" class="btn-tel">
      <span class="btn-tel-label">まずはお電話ください</span>
      <span class="btn-tel-number">090-8451-0837</span>
      <span class="btn-tel-note">24時間受付・概算料金をお伝えします</span>
    </a>
  </div>

</section>
```

---

#### セクション2: この蜂の特徴

```
<section class="bee-features">

  <h2>ミツバチの特徴</h2>
  
  <p>
    ミツバチはスズメバチやアシナガバチと比べて<strong>体が小さく、おとなしい性格</strong>です。
    花の蜜を集めるために飛び回っている姿は身近ですが、
    住宅の壁の中や天井裏に巣を作ると、大量の蜜による被害が深刻になります。
  </p>

  <div class="bee-spec-table">
    <h3>日本に生息するミツバチ</h3>
    
    <table>
      <thead>
        <tr>
          <th>種類</th>
          <th>体長</th>
          <th>体の色</th>
          <th>攻撃性</th>
          <th>特徴</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ニホンミツバチ</td>
          <td>10〜13mm</td>
          <td>黒っぽい、黄褐色と黒の控えめな縞</td>
          <td>★（おとなしい）</td>
          <td>在来種。群れ全体で越冬。1匹刺すと集団で襲う場合あり</td>
        </tr>
        <tr>
          <td>セイヨウミツバチ</td>
          <td>12〜14mm</td>
          <td>オレンジと黒の鮮やかな縞模様</td>
          <td>★〜★★（やや攻撃的な個体も）</td>
          <td>養蜂用に導入された外来種。蜜の量が多い</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bee-feature-detail">
    <h3>ミツバチ特有の問題 — 蜜による二次被害</h3>
    <p>
      ミツバチの巣が厄介なのは、<strong>駆除だけでは終わらない</strong>ことです。
      巣の中には大量の蜜（ハチミツ）が蓄えられており、
      駆除後に巣を放置すると蜜が溶け出し、以下の被害が発生します。
    </p>
    <ul>
      <li><strong>天井・壁への蜜のシミ</strong> — 修繕費が高額になるケースも</li>
      <li><strong>ゴキブリ・アリなどの害虫の誘引</strong> — 二次的な害虫被害</li>
      <li><strong>悪臭</strong> — 蜜が発酵して異臭が発生</li>
      <li><strong>建材の腐食</strong> — 長期間放置すると木材が腐る</li>
    </ul>
    <p>
      蜂駆除あらいでは、<strong>ミツバチの駆除 + 巣の完全撤去 + 蜜の清掃</strong>まで
      対応しています。
    </p>
  </div>

</section>
```

**活動時期**:
- 2〜3月: 活動開始。越冬明けで攻撃性がやや高い
- 4〜6月: 分蜂（巣分かれ）の時期。大量のミツバチが群れで移動する現象
- 7〜9月: 活動のピーク。蜜の蓄えが最大
- 10〜11月: 越冬準備。攻撃性がやや高まる
- 12〜1月: 巣の中で群全体が身を寄せ合い越冬（死滅しない）

---

#### セクション3: 巣の見分け方

```
<section class="nest-identify">

  <h2>ミツバチの巣の見分け方</h2>

  <p>
    ミツバチの巣は<strong>板状の「巣板（すいた）」</strong>が何枚も並んだ構造です。
    六角形の巣房（ハニカム構造）が特徴で、蜜蝋（みつろう）でできた白〜黄色い板が
    複数枚並列しています。
  </p>

  <div class="nest-detail">
    <h3>巣の特徴</h3>
    [写真: ミツバチの巣板]
    <ul>
      <li>形: 板状の「巣板」が複数枚並んだ構造</li>
      <li>大きさ: 1枚の巣板が30cm以上になることも。枚数が増えると大規模に</li>
      <li>色: 白〜黄色〜茶色（蜜蝋の色）</li>
      <li>構造: 六角形の巣房（ハニカム構造）</li>
      <li>蜂の数: <strong>1つの巣に数千〜数万匹</strong></li>
    </ul>

    <h3>ミツバチの巣がよく見つかる場所</h3>
    <ul>
      <li><strong>壁の中・壁の隙間</strong>（最も多い。外から見えない）</li>
      <li><strong>天井裏・屋根裏</strong></li>
      <li>床下</li>
      <li>木の洞（うろ）</li>
      <li>墓石の中</li>
      <li>換気口の奥</li>
    </ul>

    <h3>「分蜂」を見かけたら</h3>
    <p>
      春先（4〜6月）に、<strong>大量のミツバチが木の枝や壁に塊になっている</strong>のを
      見かけることがあります。これは「分蜂（ぶんぽう）」と呼ばれる現象で、
      新しい女王バチが巣の半分のミツバチを連れて引っ越しをしている途中です。
    </p>
    <p>
      分蜂の群れは<strong>一時的にとどまっているだけで、通常1〜3日で移動します</strong>。
      攻撃性も低いため、そのまま待つことも選択肢の一つです。
      ただし、そのまま住みついてしまうケースもあるため、
      お困りの場合はお電話ください。
    </p>
  </div>

</section>
```

---

#### セクション4: 危険性の解説

```
<section class="bee-danger">

  <h2>ミツバチに刺された場合の危険性</h2>

  <p>
    ミツバチは基本的におとなしく、自分から人を刺すことはほとんどありません。
    ただし以下の点にご注意ください。
  </p>

  <div class="symptom-list">
    <h3>ミツバチに刺された場合</h3>
    <ul>
      <li>刺された部分にチクッとした痛みと腫れ</li>
      <li><strong>針が皮膚に残る</strong>（ミツバチは刺すと針が抜けて死んでしまう）</li>
      <li>針が残っている間は毒嚢から毒が注入され続けるため、<strong>早めに抜く必要あり</strong></li>
      <li>毒性はスズメバチより弱いが、アナフィラキシーの可能性はゼロではない</li>
    </ul>

    <h3>ミツバチが攻撃的になる場面</h3>
    <ul>
      <li>巣を直接触った・振動を与えた場合</li>
      <li><strong>1匹を刺すと「警報フェロモン」が出て、集団で攻撃される</strong></li>
      <li>越冬明け（2〜3月）と越冬前（10〜11月）は攻撃性がやや高い</li>
    </ul>
  </div>

  <div class="danger-message">
    <p>
      ミツバチは益虫でもあり、できれば共存したい蜂です。
      しかし、<strong>住宅の壁の中や天井裏に巣を作ってしまった場合は、
      蜜による建物被害が深刻になるため、早めの対処が必要です。</strong>
    </p>
  </div>

</section>
```

---

#### セクション5: 駆除方法と料金

```
<section class="extermination-price">

  <h2>ミツバチの駆除方法と料金</h2>

  <div class="method">
    <h3>ミツバチ駆除の特殊性</h3>
    <p>
      ミツバチの駆除は、スズメバチやアシナガバチとは異なる専門技術が必要です。
    </p>
    <ul>
      <li><strong>巣の完全撤去</strong>: 壁や天井裏の巣板を1枚ずつ取り出す</li>
      <li><strong>蜜の清掃</strong>: 残った蜜を丁寧に除去し、シミや害虫の発生を防止</li>
      <li><strong>侵入口の封鎖</strong>: 同じ場所に再び巣を作られないよう、隙間を塞ぐ</li>
    </ul>
    <p>
      ※壁の中の巣の場合、壁材の一部を外す必要がある場合があります。
      事前にお見積もりで全ての費用をお伝えします。
    </p>
  </div>

  <div class="price-table">
    <h3>ミツバチ駆除の料金表（税込）</h3>
    
    <table>
      <thead>
        <tr>
          <th>蜂の種類</th>
          <th>11〜5月</th>
          <th>6月</th>
          <th>7〜9月（ピーク）</th>
          <th>10月</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ミツバチ（その他の蜂）</td>
          <td>11,000円</td>
          <td>16,500円</td>
          <td><strong>22,000円</strong></td>
          <td>16,500円</td>
        </tr>
      </tbody>
    </table>

    <p class="price-note">
      ※壁の中や天井裏など大規模な巣の場合は、追加料金が発生する場合があります。<br>
      お電話で状況をお聞きし、概算料金をお伝えします。
    </p>
  </div>

</section>
```

---

#### セクション6〜8

- **セクション6（施工事例）**: ミツバチの駆除事例。壁の中から取り出した巣板、蜜の清掃のビフォーアフター
- **セクション7（CTA）**: 「放置すると蜜で建物が傷みます」→ 早めのご相談を
- **セクション8（季節別注意事項）**: 分蜂シーズン（4〜6月）の対応、冬でも巣は存在（越冬する）

---

#### 必要な画像素材リスト（ミツバチページ）

| # | 画像 | 用途 |
|---|------|------|
| 1 | ニホンミツバチの写真 | 種類の特徴 |
| 2 | セイヨウミツバチの写真 | 種類の特徴 |
| 3 | ミツバチの巣板の写真 | 巣の見分け方 |
| 4 | 壁の中のミツバチの巣の写真 | 巣の見分け方 |
| 5 | 分蜂の群れの写真 | 分蜂の解説 |
| 6 | 蜜によるシミ・被害の写真 | 二次被害の解説 |
| 7 | ビフォーアフター写真 ×2〜3セット | 施工事例 |

---

#### 構造化データ（ミツバチページ）

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "福岡市のミツバチ駆除・巣の撤去",
  "description": "福岡市のミツバチ駆除・巣の撤去なら蜂駆除あらい。料金11,000円〜22,000円（税込・季節別）。巣の撤去から蜜の清掃まで対応。",
  "provider": {
    "@type": "LocalBusiness",
    "name": "蜂駆除あらい",
    "telephone": "090-8451-0837",
    "url": "https://www.hachikujyo-arai.com/"
  },
  "areaServed": {
    "@type": "City",
    "name": "福岡市"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "JPY",
    "price": "11000",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "11000",
      "maxPrice": "22000",
      "priceCurrency": "JPY"
    }
  }
}
```

---
---

# Part 2: 店舗案内ページ（/about）のリニューアル案

---

### 基本設定

| 項目 | 内容 |
|------|------|
| URL | `/about/` |
| title | `店舗案内｜蜂駆除あらい｜久留米市の蜂駆除専門店・24時間対応` |
| meta description | `蜂駆除あらいは久留米市に拠点を構え、福岡県・佐賀県・熊本県で蜂の巣駆除を行う専門店です。代表の新井が自ら現場に駆けつけ、誠実・明朗会計で対応いたします。24時間365日受付。090-8451-0837` |
| H1 | `店舗案内 — 蜂駆除あらいについて` |

---

### セクション構成

#### セクション1: 代表挨拶（顔写真付き）

```
<section class="greeting">

  <h2>代表挨拶</h2>

  <div class="greeting-layout">
    <div class="greeting-photo">
      [代表の顔写真 — 作業着を着た自然な笑顔の写真]
      <p class="photo-caption">蜂駆除あらい 代表</p>
    </div>
    
    <div class="greeting-text">
      <h3>「福岡の蜂のお困りごと、私が直接伺います。」</h3>
      
      <p>
        はじめまして。蜂駆除あらい代表の新井（あらい）です。
        このページをご覧いただき、ありがとうございます。
      </p>

      <p>
        私は以前、岡山県で蜂駆除の仕事をしており、
        おかげさまで月に40〜50件のご依頼をいただいていました。
        その経験を活かして、現在は福岡に拠点を移し、
        福岡県・佐賀県・熊本県のお客様の蜂のお困りごとに対応しています。
      </p>

      <p>
        蜂の巣を見つけたとき、多くのお客様が不安に思うことがあります。
      </p>

      <ul>
        <li>「どこに頼めばいいかわからない」</li>
        <li>「結局いくらかかるの？追加料金が怖い」</li>
        <li>「ちゃんとした人が来てくれるのかな」</li>
      </ul>

      <p>
        蜂駆除あらいでは、この3つの不安をすべて解消したいと思っています。
      </p>

      <p>
        <strong>料金は全て事前にお伝えします。</strong>季節ごと・蜂の種類ごとの料金表を
        公開していますし、お電話の段階で「だいたいこのくらいです」とお伝えできます。
        現地でお見積もりをした後に追加料金が発生する場合も、
        必ず事前にご説明し、ご了承いただいてから作業に入ります。
      </p>

      <p>
        そして、<strong>お電話をくださったお客様のところに伺うのは、私自身です。</strong>
        下請けのスタッフが行くことはありません。
        お電話で対応した人間がそのままお伺いしますので、
        「電話と話が違う」ということがありません。
      </p>

      <p>
        蜂の巣を見つけたら、いつでもお気軽にお電話ください。
        24時間365日、対応いたします。
      </p>

      <p class="greeting-signature">
        蜂駆除あらい 代表<br>
        <strong>新井</strong>
      </p>
    </div>
  </div>

</section>
```

---

#### セクション2: 経歴・資格

```
<section class="career">

  <h2>代表の経歴</h2>

  <div class="career-timeline">
    <div class="career-item">
      <div class="career-period">岡山県での活動</div>
      <div class="career-detail">
        <p>
          岡山県にて蜂駆除事業を開始。
          地域のお客様に支えられ、月40〜50件のご依頼をいただくまでに成長。
          スズメバチ・アシナガバチ・ミツバチなど、あらゆる種類の蜂の駆除を経験し、
          住宅の屋根裏、壁の中、地中の巣など、難易度の高い現場も数多く対応。
        </p>
      </div>
    </div>
    <div class="career-item">
      <div class="career-period">福岡県へ拠点移転</div>
      <div class="career-detail">
        <p>
          久留米市に拠点を移し、蜂駆除あらいとして活動開始。
          岡山での経験・技術を活かし、福岡県・佐賀県・熊本県の
          お客様に蜂駆除サービスを提供しています。
        </p>
      </div>
    </div>
  </div>

  <div class="qualifications">
    <h3>対応実績</h3>
    <ul>
      <li>スズメバチ（オオスズメバチ・キイロスズメバチ・コガタスズメバチ等）</li>
      <li>アシナガバチ（セグロアシナガバチ・フタモンアシナガバチ等）</li>
      <li>ミツバチ（ニホンミツバチ・セイヨウミツバチ）</li>
      <li>個人宅・マンション・店舗・公共施設など幅広い施設に対応</li>
    </ul>
  </div>

</section>
```

---

#### セクション3: 会社概要テーブル

```
<section class="company-info">

  <h2>会社概要</h2>

  <table class="info-table">
    <tbody>
      <tr><th>屋号</th><td>蜂駆除あらい</td></tr>
      <tr><th>代表</th><td>新井</td></tr>
      <tr><th>所在地</th><td>〒830-0001 福岡県久留米市小森野6丁目18-27</td></tr>
      <tr><th>電話番号</th><td><a href="tel:09084510837">090-8451-0837</a>（24時間受付）</td></tr>
      <tr><th>メール</th><td>info@hachikujyo-arai.com</td></tr>
      <tr><th>営業時間</th><td>24時間365日（年中無休）</td></tr>
      <tr><th>事業内容</th><td>蜂の巣駆除（スズメバチ・アシナガバチ・ミツバチ等）<br>鍵交換・鍵開け</td></tr>
      <tr><th>対応エリア</th><td>福岡県・佐賀県・熊本県</td></tr>
      <tr><th>お支払い方法</th><td>現金 / クレジットカード（VISA・JCB・American Express）</td></tr>
      <tr><th>Webサイト</th><td>https://www.hachikujyo-arai.com/</td></tr>
    </tbody>
  </table>

</section>
```

---

#### セクション4: アクセスマップ

```
<section class="access-map">

  <h2>アクセス</h2>

  <p>
    蜂駆除あらいは福岡を拠点に、福岡市内はもちろん、
    福岡県・佐賀県・熊本県全域に出張対応しています。
  </p>

  <div class="map-embed">
    <!-- Googleマップ埋め込み -->
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.xxx!2d130.xxx!3d33.xxx!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z6Jyd6aeG6Zmk44GC44KJ44GE!5e0!3m2!1sja!2sjp!4v1234567890"
      width="100%" 
      height="400" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy">
    </iframe>
  </div>

  <div class="access-detail">
    <p><strong>所在地</strong>: 〒830-0001 福岡県久留米市小森野6丁目18-27</p>
    <p>
      ※お客様のご自宅・現地に出張して駆除を行います。
      事務所への来訪は不要です。
    </p>
  </div>

</section>
```

---

#### セクション5: 設備・車両

```
<section class="equipment">

  <h2>使用設備・車両</h2>

  <div class="equipment-grid">
    <div class="equipment-item">
      [作業車両の写真]
      <h3>専用作業車両</h3>
      <p>駆除に必要な機材一式を常時積載。お電話いただいたらすぐに出動できます。</p>
    </div>
    <div class="equipment-item">
      [防護服の写真]
      <h3>専用防護服</h3>
      <p>スズメバチの毒針も通さないプロ用の防護服を使用しています。</p>
    </div>
    <div class="equipment-item">
      [噴霧器・道具の写真]
      <h3>専用駆除機材</h3>
      <p>高所作業用の伸縮ポール、専用噴霧器、安全に巣を撤去するための各種工具を完備。</p>
    </div>
  </div>

</section>
```

---

#### セクション6: CTA

```
<section class="about-cta">

  <h2>蜂の巣でお困りですか？</h2>

  <p>
    蜂の巣を見つけたら、まずはお気軽にお電話ください。<br>
    <strong>代表の新井が直接お電話をお受けし、概算料金をお伝えします。</strong>
  </p>

  <a href="tel:09084510837" class="btn-tel-large">
    <span>今すぐ電話する</span>
    <span class="tel-number">090-8451-0837</span>
    <span class="tel-note">24時間365日受付</span>
  </a>

</section>
```

---

#### 必要な画像素材リスト（店舗案内ページ）

| # | 画像 | 用途 | 備考 |
|---|------|------|------|
| 1 | 代表の顔写真（笑顔・作業着） | 代表挨拶セクション | 必須。人柄が伝わる自然な写真 |
| 2 | 代表の作業中の写真 | 経歴セクション | 信頼感を補強 |
| 3 | 作業車両の写真 | 設備セクション | 清潔感のある車両 |
| 4 | 防護服の写真 | 設備セクション | プロ感の演出 |
| 5 | 駆除機材の写真 | 設備セクション | 専門性のアピール |

---

#### 構造化データ（店舗案内ページ）

既存の`baseinfo.php`で出力されている`LocalBusiness`スキーマを拡充:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "蜂駆除あらい",
  "description": "福岡を拠点に、福岡県・佐賀県・熊本県で蜂の巣駆除を行う専門店。24時間365日対応。",
  "image": "https://www.hachikujyo-arai.com/wp-content/uploads/logo_ogp_20220105.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "小森野6丁目18-27",
    "addressLocality": "久留米市",
    "addressRegion": "福岡県",
    "postalCode": "830-0001",
    "addressCountry": "JP"
  },
  "telephone": "090-8451-0837",
  "email": "info@hachikujyo-arai.com",
  "url": "https://www.hachikujyo-arai.com/",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "¥11,000〜¥55,000",
  "paymentAccepted": "Cash, Credit Card (VISA, JCB, American Express)",
  "areaServed": [
    {"@type": "State", "name": "福岡県"},
    {"@type": "State", "name": "佐賀県"},
    {"@type": "State", "name": "熊本県"}
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.5567",
    "longitude": "130.3785"
  }
}
```

---
---

# Part 3: 施工事例ページ（/case）のリニューアル案

---

### 基本設定

| 項目 | 内容 |
|------|------|
| URL（一覧） | `/case/` |
| URL（個別） | `/case/{post-slug}/` |
| title（一覧） | `施工事例｜福岡の蜂駆除あらい｜スズメバチ・アシナガバチの駆除写真` |
| meta description（一覧） | `蜂駆除あらいが福岡市・福岡県内で実施した蜂の巣駆除の施工事例を写真付きでご紹介。スズメバチ・アシナガバチ・ミツバチの駆除前後の写真、料金、作業時間を掲載。090-8451-0837` |
| H1（一覧） | `施工事例 — 蜂の巣駆除のビフォーアフター` |

---

### 一覧ページのテンプレート

```
<section class="case-list-hero">
  <h1>施工事例 — 蜂の巣駆除のビフォーアフター</h1>
  <p>
    蜂駆除あらいが実際に対応した駆除事例を、写真付きでご紹介します。<br>
    蜂の種類、巣の場所、料金、作業時間をすべて公開しています。<br>
    <strong>「自分の家のケースだといくらくらい？」</strong>の参考にしてください。
  </p>
</section>

<!-- フィルター -->
<section class="case-filter">
  <h2>蜂の種類で絞り込む</h2>
  <div class="filter-buttons">
    <button class="filter-btn active" data-filter="all">すべて</button>
    <button class="filter-btn" data-filter="suzumebachi">スズメバチ</button>
    <button class="filter-btn" data-filter="ashinagabachi">アシナガバチ</button>
    <button class="filter-btn" data-filter="mitsubachi">ミツバチ</button>
  </div>
</section>

<!-- 事例一覧（カード形式） -->
<section class="case-grid">

  <!-- 事例カード ×N件 -->
  <article class="case-card" data-type="suzumebachi">
    <div class="case-card-photos">
      <div class="before-after">
        <div class="before">
          <span class="label">Before</span>
          [駆除前の写真]
        </div>
        <div class="after">
          <span class="label">After</span>
          [駆除後の写真]
        </div>
      </div>
    </div>
    <div class="case-card-info">
      <h3>久留米市 — スズメバチの巣駆除</h3>
      <div class="case-tags">
        <span class="tag tag-bee">スズメバチ</span>
        <span class="tag tag-area">久留米市</span>
      </div>
      <table class="case-summary">
        <tr><td>蜂の種類</td><td>キイロスズメバチ</td></tr>
        <tr><td>巣の場所</td><td>2階軒下</td></tr>
        <tr><td>巣の大きさ</td><td>約25cm</td></tr>
        <tr><td>料金</td><td><strong>38,500円（税込）</strong></td></tr>
        <tr><td>作業時間</td><td>約40分</td></tr>
      </table>
      <a href="/case/jonannku-suzumebachi-001/" class="case-link">詳しく見る →</a>
    </div>
  </article>

  <!-- 事例カードを繰り返し -->

</section>

<!-- ページネーション -->
<nav class="case-pagination">
  <a href="/case/page/2/">次のページ →</a>
</nav>

<!-- CTA -->
<section class="case-cta">
  <h2>同じような蜂の巣でお困りですか？</h2>
  <p>
    巣の場所や蜂の種類をお伝えいただければ、<br>
    <strong>お電話で概算料金をお伝えします。</strong>
  </p>
  <a href="tel:09084510837" class="btn-tel-large">
    <span>今すぐ電話する</span>
    <span class="tel-number">090-8451-0837</span>
  </a>
</section>
```

---

### 個別事例ページのテンプレート

```
<!-- SEO設定: 各事例ごとに個別設定 -->
<!-- title例: 久留米市のスズメバチ駆除｜軒下の巣を38,500円で駆除｜蜂駆除あらい -->
<!-- H1例: 久留米市 — 2階軒下のスズメバチの巣を駆除 -->

<section class="case-detail-hero">
  <h1>久留米市 — 2階軒下のスズメバチの巣を駆除</h1>
  <div class="case-detail-tags">
    <span class="tag">キイロスズメバチ</span>
    <span class="tag">久留米市</span>
    <span class="tag">戸建て</span>
    <span class="tag">2024年8月</span>
  </div>
</section>

<section class="case-detail-content">

  <!-- ビフォーアフター写真（大きく） -->
  <div class="before-after-large">
    <div class="before">
      <span class="label">駆除前</span>
      [大きなビフォー写真]
    </div>
    <div class="after">
      <span class="label">駆除後</span>
      [大きなアフター写真]
    </div>
  </div>

  <!-- 施工データ -->
  <div class="case-data-table">
    <h2>施工データ</h2>
    <table>
      <tr><th>ご依頼日</th><td>2024年8月○日</td></tr>
      <tr><th>地域</th><td>久留米市</td></tr>
      <tr><th>建物</th><td>戸建て（2階建て）</td></tr>
      <tr><th>蜂の種類</th><td>キイロスズメバチ</td></tr>
      <tr><th>巣の場所</th><td>2階の軒下</td></tr>
      <tr><th>巣の大きさ</th><td>約25cm（バレーボール大）</td></tr>
      <tr><th>作業時間</th><td>約40分</td></tr>
      <tr><th>料金（税込）</th><td><strong>38,500円</strong>（基本33,000円 + 高所作業5,500円）</td></tr>
    </table>
  </div>

  <!-- 代表コメント -->
  <div class="case-comment">
    <h2>代表コメント</h2>
    <div class="comment-box">
      <div class="comment-avatar">[代表の顔写真（小）]</div>
      <div class="comment-text">
        <p>
          お客様から「ベランダに蜂がたくさん飛んでいて洗濯物が干せない」とのご連絡をいただき、
          当日中にお伺いしました。2階の軒下にキイロスズメバチの巣があり、
          直径約25cmまで成長していました。
        </p>
        <p>
          高所でしたがはしごで安全に作業できる位置にあったため、
          防護服を着用して薬剤処理後、巣を完全に撤去しました。
          作業時間は約40分で完了。お客様にも安心していただけました。
        </p>
      </div>
    </div>
  </div>

  <!-- お客様の声 -->
  <div class="case-voice">
    <h2>お客様の声</h2>
    <blockquote>
      <p>
        「電話したその日に来てくれて本当に助かりました。
        料金も電話で言われた金額そのままで、安心できました。
        新井さんの対応がとても丁寧で、蜂の習性についても教えてもらえました。」
      </p>
      <cite>— K様（久留米市・戸建て）</cite>
    </blockquote>
  </div>

  <!-- 追加写真ギャラリー -->
  <div class="case-gallery">
    <h2>作業の様子</h2>
    <div class="gallery-grid">
      [作業前の全景写真]
      [作業中の写真]
      [撤去した巣の写真]
      [作業後の写真]
    </div>
  </div>

</section>

<!-- 関連事例 -->
<section class="related-cases">
  <h2>同じ種類の蜂の駆除事例</h2>
  <!-- スズメバチの他の事例カードを3件 -->
</section>

<!-- CTA -->
<section class="case-detail-cta">
  <h2>同じような蜂の巣でお困りですか？</h2>
  <p>
    この事例と似た状況でしたら、料金の目安は<strong>○○円前後</strong>です。<br>
    詳しくはお電話でお伺いします。
  </p>
  <a href="tel:09084510837" class="btn-tel-large">
    <span>今すぐ電話する</span>
    <span class="tel-number">090-8451-0837</span>
  </a>
</section>
```

---

### 施工事例の投稿運用ルール

uploads内に約60枚の施工写真が既に存在するため、以下の手順で活用する:

1. **既存写真60枚を確認・分類**: 蜂の種類・場所・時期ごとに分類
2. **初期掲載**: ビフォーアフターのペアが揃う写真から10〜15件を初期掲載
3. **月次追加**: 新規施工ごとにビフォーアフター写真を撮影し、月4件以上追加
4. **撮影ルール**: 
   - 駆除前: 巣の全景 + 巣のアップ + 設置場所の遠景
   - 駆除後: 同じアングルで撮影
   - 撤去した巣の写真
   - お客様の許可を得てから掲載

---
---

# Part 4: よくある質問ページ（/faq）のリニューアル案

---

### 基本設定

| 項目 | 内容 |
|------|------|
| URL | `/faq/` |
| title | `よくある質問｜蜂駆除あらい｜料金・対応・作業・保証について` |
| meta description | `蜂駆除あらいへのよくある質問と回答。料金の目安、対応エリア、作業時間、支払い方法、蜂の巣を見つけた時の対処法など、蜂駆除に関する疑問にお答えします。久留米市の蜂駆除専門店。090-8451-0837` |
| H1 | `よくある質問（FAQ）` |

---

### 質問と回答一覧（15問）

#### カテゴリ1: 料金について

**Q1. 蜂の巣の駆除にはいくらかかりますか？**

> 蜂の種類と時期によって異なります。以下が基本料金（税込）です。
> 
> - **アシナガバチ**: 11,000円〜22,000円
> - **スズメバチ**: 22,000円〜33,000円
> - **オオスズメバチ**: 33,000円〜55,000円
> - **ミツバチ・その他**: 11,000円〜22,000円
> 
> ※7〜9月のピーク期は上記の上限に近い料金になります。巣の場所が高所・屋根裏・地中の場合は、別途追加料金（5,500円〜11,000円）がかかる場合があります。お電話で状況をお聞きし、概算料金をお伝えしますので、まずはお気軽にご連絡ください。

**Q2. 見積もりは無料ですか？追加料金はかかりませんか？**

> お電話での概算見積もりは無料です。現地での調査後に正確な料金をお伝えし、ご了承いただいてから作業を開始します。**お見積もり後のキャンセルも無料です。**追加料金が発生する場合（高所作業・屋根裏作業など）は、必ず事前にご説明いたします。作業後に「聞いていない料金を請求された」ということは絶対にありません。

**Q3. 他社より安い料金のところがあるのですが？**

> ネットで「3,000円〜」と表示している業者もありますが、これは最も小さな巣・最も簡単な条件での最低価格です。実際には出張費・作業費・薬剤費・処分費などが加算され、最終的に2〜3万円以上になるケースが大半です。蜂駆除あらいでは、**最初から「実際にかかる料金」をお伝えしています。**「安く見せて後から高くなる」ということはありません。

**Q4. 支払い方法は何がありますか？**

> 現金のほか、クレジットカード（VISA・JCB・American Express）がご利用いただけます。作業完了後、その場でお支払いいただきます。

---

#### カテゴリ2: 対応について

**Q5. 対応エリアはどこですか？**

> 福岡県全域・佐賀県・熊本県に対応しています。久留米市に拠点があるため、久留米市周辺は特にスピーディーに対応可能です。その他のエリアについてもお気軽にご相談ください。

**Q6. 24時間対応とのことですが、夜間や休日でも来てもらえますか？**

> はい、24時間365日対応しています。土日祝日・夜間・早朝も追加料金なしで対応いたします。蜂の被害は待ってくれませんので、いつでもお電話ください。

**Q7. 電話してからどのくらいで来てもらえますか？**

> 福岡市内であれば、お電話いただいてから最短で当日中のお伺いが可能です。ご依頼の混雑状況によってはお時間をいただく場合もありますが、できる限り迅速に対応いたします。

**Q8. マンション・アパートの蜂の巣も対応してもらえますか？**

> はい、対応いたします。マンションのベランダ、共用廊下、駐輪場などの蜂の巣駆除も承っています。賃貸物件の場合は、事前に管理会社様・オーナー様にご連絡いただくとスムーズです。管理会社様からの直接のご依頼も承っています。

---

#### カテゴリ3: 作業について

**Q9. 作業にはどのくらい時間がかかりますか？**

> 蜂の種類や巣の場所・大きさによりますが、通常は**30分〜1時間程度**で完了します。壁の中のミツバチの巣など、大規模な作業の場合は2時間以上かかることもあります。事前にお見積もりの段階で、作業時間の目安もお伝えします。

**Q10. 作業中は家にいなければいけませんか？**

> 作業前の確認と作業後のご確認のために、原則としてお立ち会いをお願いしています。ただし、ご事情がある場合は、事前にお打ち合わせの上、お立ち会いなしで対応することも可能です。

**Q11. 作業中に蜂が飛び散って近所に迷惑がかからないか心配です。**

> 駆除作業は蜂の活動が落ち着く時間帯に行い、薬剤を使用して蜂を鎮めてから巣を撤去します。周囲への飛散を最小限にする方法で作業しますのでご安心ください。万が一ご近所の方にご迷惑がかかる場合は、事前にお声がけさせていただきます。

---

#### カテゴリ4: 保証・アフターケアについて

**Q12. 駆除した後にまた蜂が来ることはありますか？**

> 巣を撤去した直後は、「戻りバチ」と呼ばれる外出中だった蜂が巣のあった場所に戻ってくることがあります。通常は数日で散りますが、しばらく飛んでいるようであればお電話ください。再巣作りの兆候がある場合は対応いたします。

**Q13. 蜂の巣を見つけたらどうすればいいですか？（応急処置）**

> まず**巣に近づかないでください**。特にスズメバチは巣から数メートル以内に近づくと攻撃してきます。以下の対処をお願いします。
>
> 1. 巣から離れ、家族にも近づかないよう伝える
> 2. 窓やドアを閉めて、蜂が室内に入らないようにする
> 3. 殺虫スプレーをかけるのは逆効果（蜂が興奮して攻撃的になる）
> 4. お電話ください（090-8451-0837）。蜂の種類がわからなくても大丈夫です

---

#### カテゴリ5: その他

**Q14. 蜂の種類がわからないのですが、対応してもらえますか？**

> もちろんです。お電話で蜂の大きさや色、巣の形をお聞きすれば、おおよその種類を判別できます。スマートフォンで写真を撮って、メールやお問い合わせフォームから送っていただければ、より正確に種類をお伝えできます。安全な距離から撮影してください。

**Q15. 福岡市は行政が蜂の巣を駆除してくれないのですか？**

> 福岡市では、蜂の巣の駆除は**行政（市役所・区役所）では対応していません**。市民の方が自費で専門業者に依頼する必要があります。各区役所の生活環境課に相談すると、業者を紹介してもらえる場合がありますが、駆除自体は行いません。蜂駆除あらいは久留米市の地元業者として、福岡県内全域に対応していますので、お気軽にご相談ください。

---

### FAQPage 構造化データ（JSON-LD）

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "蜂の巣の駆除にはいくらかかりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "蜂の種類と時期によって異なります。アシナガバチは11,000円〜22,000円、スズメバチは22,000円〜33,000円、オオスズメバチは33,000円〜55,000円、ミツバチ・その他は11,000円〜22,000円（すべて税込）です。7〜9月のピーク期は上限に近い料金になります。巣の場所が高所・屋根裏・地中の場合は、別途追加料金（5,500円〜11,000円）がかかる場合があります。お電話で概算料金をお伝えします。"
      }
    },
    {
      "@type": "Question",
      "name": "見積もりは無料ですか？追加料金はかかりませんか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "お電話での概算見積もりは無料です。現地調査後に正確な料金をお伝えし、ご了承いただいてから作業を開始します。お見積もり後のキャンセルも無料です。追加料金が発生する場合は、必ず事前にご説明いたします。"
      }
    },
    {
      "@type": "Question",
      "name": "他社より安い料金のところがあるのですが？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ネットで「3,000円〜」と表示している業者もありますが、これは最も小さな巣・最も簡単な条件での最低価格です。実際には出張費・作業費・薬剤費・処分費などが加算され、最終的に2〜3万円以上になるケースが大半です。蜂駆除あらいでは、最初から実際にかかる料金をお伝えしています。"
      }
    },
    {
      "@type": "Question",
      "name": "支払い方法は何がありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "現金のほか、クレジットカード（VISA・JCB・American Express）がご利用いただけます。作業完了後、その場でお支払いいただきます。"
      }
    },
    {
      "@type": "Question",
      "name": "対応エリアはどこですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "福岡県全域・佐賀県・熊本県に対応しています。久留米市に拠点があるため、久留米市周辺は特にスピーディーに対応可能です。"
      }
    },
    {
      "@type": "Question",
      "name": "24時間対応とのことですが、夜間や休日でも来てもらえますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、24時間365日対応しています。土日祝日・夜間・早朝も追加料金なしで対応いたします。"
      }
    },
    {
      "@type": "Question",
      "name": "電話してからどのくらいで来てもらえますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "福岡市内であれば、お電話いただいてから最短で当日中のお伺いが可能です。ご依頼の混雑状況によってはお時間をいただく場合もありますが、できる限り迅速に対応いたします。"
      }
    },
    {
      "@type": "Question",
      "name": "マンション・アパートの蜂の巣も対応してもらえますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、対応いたします。マンションのベランダ、共用廊下、駐輪場などの蜂の巣駆除も承っています。賃貸物件の場合は、事前に管理会社様・オーナー様にご連絡いただくとスムーズです。"
      }
    },
    {
      "@type": "Question",
      "name": "作業にはどのくらい時間がかかりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "蜂の種類や巣の場所・大きさによりますが、通常は30分〜1時間程度で完了します。壁の中のミツバチの巣など、大規模な作業の場合は2時間以上かかることもあります。"
      }
    },
    {
      "@type": "Question",
      "name": "駆除した後にまた蜂が来ることはありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "巣を撤去した直後は、「戻りバチ」と呼ばれる外出中だった蜂が巣のあった場所に戻ってくることがあります。通常は数日で散りますが、しばらく飛んでいるようであればお電話ください。再巣作りの兆候がある場合は対応いたします。"
      }
    },
    {
      "@type": "Question",
      "name": "蜂の巣を見つけたらどうすればいいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "まず巣に近づかないでください。特にスズメバチは巣から数メートル以内に近づくと攻撃してきます。巣から離れて家族にも注意を伝え、窓やドアを閉めてから、お電話ください（090-8451-0837）。殺虫スプレーをかけるのは蜂が興奮するため逆効果です。蜂の種類がわからなくても大丈夫です。"
      }
    },
    {
      "@type": "Question",
      "name": "蜂の種類がわからないのですが、対応してもらえますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "もちろんです。お電話で蜂の大きさや色、巣の形をお聞きすれば、おおよその種類を判別できます。スマートフォンで写真を撮ってお送りいただければ、より正確に種類をお伝えできます。安全な距離から撮影してください。"
      }
    },
    {
      "@type": "Question",
      "name": "作業中は家にいなければいけませんか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "作業前の確認と作業後のご確認のために、原則としてお立ち会いをお願いしています。ただし、ご事情がある場合は、事前にお打ち合わせの上、お立ち会いなしで対応することも可能です。"
      }
    },
    {
      "@type": "Question",
      "name": "作業中に蜂が飛び散って近所に迷惑がかからないか心配です。",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "駆除作業は蜂の活動が落ち着く時間帯に行い、薬剤を使用して蜂を鎮めてから巣を撤去します。周囲への飛散を最小限にする方法で作業しますのでご安心ください。"
      }
    },
    {
      "@type": "Question",
      "name": "福岡市は行政が蜂の巣を駆除してくれないのですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "福岡市では、蜂の巣の駆除は行政（市役所・区役所）では対応していません。市民の方が自費で専門業者に依頼する必要があります。蜂駆除あらいは久留米市の地元業者として、福岡県内全域に対応していますので、お気軽にご相談ください。"
      }
    }
  ]
}
</script>
```

---

### アコーディオン表示のUI実装

```html
<section class="faq-section">
  <h1>よくある質問（FAQ）</h1>
  
  <p class="faq-intro">
    蜂駆除あらいにお客様からよくいただくご質問と回答をまとめました。<br>
    この他にも疑問がございましたら、お気軽にお電話ください。
  </p>

  <!-- カテゴリ: 料金について -->
  <div class="faq-category">
    <h2>料金について</h2>
    
    <div class="faq-accordion">
      <details class="faq-item">
        <summary class="faq-question">
          <span class="faq-q-label">Q</span>
          蜂の巣の駆除にはいくらかかりますか？
        </summary>
        <div class="faq-answer">
          <span class="faq-a-label">A</span>
          <p>蜂の種類と時期によって異なります。以下が基本料金（税込）です。</p>
          <ul>
            <li><strong>アシナガバチ</strong>: 11,000円〜22,000円</li>
            <li><strong>スズメバチ</strong>: 22,000円〜33,000円</li>
            <li><strong>オオスズメバチ</strong>: 33,000円〜55,000円</li>
            <li><strong>ミツバチ・その他</strong>: 11,000円〜22,000円</li>
          </ul>
          <p>
            ※7〜9月のピーク期は上限に近い料金になります。
            お電話で概算料金をお伝えしますので、お気軽にご連絡ください。
          </p>
        </div>
      </details>

      <!-- Q2〜Q4 同様の構造 -->
    </div>
  </div>

  <!-- カテゴリ: 対応について -->
  <div class="faq-category">
    <h2>対応について</h2>
    <!-- Q5〜Q8 -->
  </div>

  <!-- カテゴリ: 作業について -->
  <div class="faq-category">
    <h2>作業について</h2>
    <!-- Q9〜Q11 -->
  </div>

  <!-- カテゴリ: 保証・アフターケアについて -->
  <div class="faq-category">
    <h2>保証・アフターケアについて</h2>
    <!-- Q12〜Q13 -->
  </div>

  <!-- カテゴリ: その他 -->
  <div class="faq-category">
    <h2>その他</h2>
    <!-- Q14〜Q15 -->
  </div>

</section>

<!-- CTA -->
<section class="faq-cta">
  <h2>解決しない疑問がありますか？</h2>
  <p>
    ここに載っていないご質問も、お気軽にお電話ください。<br>
    <strong>蜂のことなら何でもお答えします。</strong>
  </p>
  <a href="tel:09084510837" class="btn-tel-large">
    <span>電話で質問する</span>
    <span class="tel-number">090-8451-0837</span>
    <span class="tel-note">24時間受付</span>
  </a>
</section>
```

---

### アコーディオンCSS

```css
/* FAQ アコーディオン */
.faq-accordion {
  margin: 0 0 30px;
}

.faq-item {
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 0;
}

.faq-question {
  display: flex;
  align-items: center;
  padding: 18px 16px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.6;
  list-style: none;
  position: relative;
}

.faq-question::-webkit-details-marker {
  display: none;
}

.faq-question::after {
  content: "+";
  position: absolute;
  right: 16px;
  font-size: 24px;
  font-weight: 300;
  color: #666;
  transition: transform 0.3s;
}

details[open] .faq-question::after {
  content: "−";
}

.faq-q-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: #e53e3e;
  color: #fff;
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
  margin-right: 12px;
  flex-shrink: 0;
}

.faq-answer {
  padding: 0 16px 20px 56px;
  line-height: 1.8;
  color: #333;
}

.faq-a-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: #3182ce;
  color: #fff;
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
  margin-right: 12px;
  float: left;
}

.faq-category h2 {
  font-size: 20px;
  padding: 12px 0;
  border-left: 4px solid #e53e3e;
  padding-left: 12px;
  margin: 30px 0 10px;
}
```

---
---

# Part 5: お問い合わせページ（/contact）のリニューアル案

---

### 基本設定

| 項目 | 内容 |
|------|------|
| URL | `/contact/` |
| title | `お問い合わせ｜蜂駆除あらい｜電話・メールで無料相談｜福岡市` |
| meta description | `蜂駆除あらいへのお問い合わせはこちら。お電話（090-8451-0837・24時間受付）またはメールフォームからご連絡ください。蜂の種類がわからなくても大丈夫。写真を添付いただければ種類をお伝えします。久留米市の蜂駆除専門店。` |
| H1 | `お問い合わせ・無料相談` |

---

### ページ構成

```
<section class="contact-hero">

  <h1>お問い合わせ・無料相談</h1>

  <p class="contact-intro">
    蜂の巣を見つけた、蜂が飛んでいて怖い — そんなときはお気軽にご連絡ください。<br>
    <strong>蜂の種類がわからなくても大丈夫です。</strong>状況をお聞きして、対応方法と概算料金をお伝えします。
  </p>

</section>

<!-- 電話CTA（最上部・最大・最目立つ） -->
<section class="contact-tel-cta">

  <div class="tel-cta-box">
    <h2>お急ぎの方はお電話ください</h2>
    <p class="tel-cta-sub">24時間365日受付・概算見積もり無料</p>
    <a href="tel:09084510837" class="btn-tel-hero">
      <span class="tel-icon">📞</span>
      <span class="tel-number-large">090-8451-0837</span>
    </a>
    <p class="tel-cta-note">
      ※代表の新井が直接お電話をお受けします。<br>
      ※通話中は折り返しいたしますので、お名前をお伝えください。
    </p>
  </div>

  <div class="tel-cta-benefits">
    <h3>電話でお伝えいただきたいこと</h3>
    <ol>
      <li><strong>蜂の種類</strong>（わからない場合は「大きい蜂」「小さい蜂」等でOK）</li>
      <li><strong>巣の場所</strong>（軒下、ベランダ、木の枝、壁の中 など）</li>
      <li><strong>巣の大きさ</strong>（おおよそで構いません）</li>
      <li><strong>お住まいの地域</strong>（到着時間の目安をお伝えするため）</li>
    </ol>
    <p class="micro-copy">
      上記がわからなくても大丈夫です。「蜂がいて怖い」だけでも構いません。
    </p>
  </div>

</section>

<!-- メールフォーム -->
<section class="contact-form-section">

  <h2>メールでのお問い合わせ</h2>
  
  <p class="form-intro">
    お電話が難しい方、夜間で音を出せない方はこちらのフォームをご利用ください。<br>
    通常<strong>2時間以内</strong>にお返事いたします（深夜帯は翌朝のご連絡になる場合があります）。
  </p>

  <div class="form-microcopy-top">
    <p>📷 <strong>蜂や巣の写真を添付いただけると、より正確なお見積もりが可能です。</strong><br>
    安全な距離からスマートフォンで撮影してください。</p>
  </div>

  <form class="contact-form" action="/thanks/" method="post" enctype="multipart/form-data">

    <!-- 必須項目 -->
    <div class="form-group required">
      <label for="name">お名前 <span class="required-badge">必須</span></label>
      <input type="text" id="name" name="name" placeholder="例: 山田 太郎" required>
    </div>

    <div class="form-group required">
      <label for="tel">電話番号 <span class="required-badge">必須</span></label>
      <input type="tel" id="tel" name="tel" placeholder="例: 090-1234-5678" required>
      <p class="form-help">※折り返しのご連絡に使用します</p>
    </div>

    <div class="form-group">
      <label for="email">メールアドレス</label>
      <input type="email" id="email" name="email" placeholder="例: yamada@example.com">
    </div>

    <div class="form-group required">
      <label for="address">ご住所（市区町村まで） <span class="required-badge">必須</span></label>
      <input type="text" id="address" name="address" placeholder="例: 久留米市" required>
      <p class="form-help">※到着時間の目安をお伝えするため</p>
    </div>

    <!-- 蜂の種類選択 -->
    <div class="form-group">
      <label for="bee-type">蜂の種類（わかる範囲で）</label>
      <select id="bee-type" name="bee-type">
        <option value="">選択してください</option>
        <option value="suzumebachi">スズメバチ（大きい・攻撃的）</option>
        <option value="ashinagabachi">アシナガバチ（細長い・足が長い）</option>
        <option value="mitsubachi">ミツバチ（小さい・丸い）</option>
        <option value="unknown">わからない</option>
        <option value="other">その他</option>
      </select>
      <p class="form-help">
        <a href="/bee-type/suzumebachi/">蜂の種類の見分け方はこちら</a>
      </p>
    </div>

    <!-- 巣の場所 -->
    <div class="form-group">
      <label for="nest-location">巣の場所</label>
      <select id="nest-location" name="nest-location">
        <option value="">選択してください</option>
        <option value="nokishita">軒下</option>
        <option value="veranda">ベランダ</option>
        <option value="yaneura">屋根裏・天井裏</option>
        <option value="kabe">壁の中</option>
        <option value="shitsugaiki">エアコン室外機の近く</option>
        <option value="niwaki">庭木・植え込みの中</option>
        <option value="jimen">地面の中</option>
        <option value="sonota">その他</option>
        <option value="unknown">巣が見つからない（蜂が飛んでいるだけ）</option>
      </select>
    </div>

    <!-- 巣の大きさ -->
    <div class="form-group">
      <label for="nest-size">巣の大きさ（おおよそ）</label>
      <select id="nest-size" name="nest-size">
        <option value="">選択してください</option>
        <option value="small">ゴルフボール〜テニスボール大（5cm以下）</option>
        <option value="medium">ソフトボール大（10cm前後）</option>
        <option value="large">バレーボール大（20cm前後）</option>
        <option value="xlarge">バスケットボール大以上（30cm以上）</option>
        <option value="unknown">わからない</option>
      </select>
    </div>

    <!-- 写真添付 -->
    <div class="form-group">
      <label for="photo">蜂や巣の写真（添付可能）</label>
      <input type="file" id="photo" name="photo" accept="image/*" multiple>
      <p class="form-help">
        ※安全な距離から撮影した写真を添付してください。<br>
        ※写真があるとより正確な概算見積もりが可能です。<br>
        ※最大3枚まで、1枚あたり5MB以下
      </p>
    </div>

    <!-- ご希望日時 -->
    <div class="form-group">
      <label for="preferred-date">ご希望の訪問日時</label>
      <select id="preferred-date" name="preferred-date">
        <option value="asap">できるだけ早く</option>
        <option value="today">今日中</option>
        <option value="tomorrow">明日</option>
        <option value="this-week">今週中</option>
        <option value="consult">相談して決めたい</option>
      </select>
    </div>

    <!-- 自由記入 -->
    <div class="form-group">
      <label for="message">ご相談内容・気になること</label>
      <textarea id="message" name="message" rows="5" 
        placeholder="例: ベランダの軒下に蜂の巣があるようです。大きさはソフトボールくらいで、蜂が数匹飛んでいます。子供がいるので早めに駆除したいです。"></textarea>
    </div>

    <!-- 送信ボタン -->
    <div class="form-submit">
      <button type="submit" class="btn-submit">
        この内容で送信する
      </button>
      <p class="form-submit-note">
        ※送信いただいた内容を確認し、通常<strong>2時間以内</strong>にお電話またはメールでご連絡いたします。<br>
        ※<a href="/policy/">プライバシーポリシー</a>に同意の上、送信してください。
      </p>
    </div>

  </form>

</section>

<!-- フォーム下部のマイクロコピー・安心要素 -->
<section class="contact-reassurance">

  <div class="reassurance-items">
    <div class="reassurance-item">
      <h3>無料で相談できます</h3>
      <p>お電話での相談・概算見積もりは無料です。「まだ駆除するか決めていない」という段階でもお気軽にどうぞ。</p>
    </div>
    <div class="reassurance-item">
      <h3>しつこい営業はしません</h3>
      <p>お問い合わせ後にしつこく電話をかけたり、無理に契約を迫ることは一切ありません。安心してご連絡ください。</p>
    </div>
    <div class="reassurance-item">
      <h3>料金は事前にお伝えします</h3>
      <p>電話で状況をお聞きした時点で「だいたいこのくらい」とお伝えします。現地確認後の正式見積もりで金額が変わる場合も、必ずご了承いただいてから作業します。</p>
    </div>
  </div>

</section>
```

---

### サンクスページ（/thanks）の改善案

| 項目 | 内容 |
|------|------|
| URL | `/thanks/` |
| title | `送信完了｜蜂駆除あらい` |
| robots | `noindex, nofollow`（既存設定を維持） |

```
<section class="thanks-page">

  <h1>お問い合わせを受け付けました</h1>

  <div class="thanks-message">
    <p class="thanks-main">
      お問い合わせいただき、ありがとうございます。<br>
      <strong>通常2時間以内</strong>にお電話またはメールでご連絡いたします。
    </p>

    <div class="thanks-notice">
      <h2>お急ぎの場合</h2>
      <p>
        蜂の被害が切迫している場合は、フォームの返信を待たず、<br>
        <strong>直接お電話ください。</strong>24時間対応しています。
      </p>
      <a href="tel:09084510837" class="btn-tel">
        <span class="tel-number">090-8451-0837</span>
      </a>
    </div>

    <div class="thanks-tips">
      <h2>ご連絡をお待ちいただく間に</h2>
      <ul>
        <li>蜂の巣には近づかないでください</li>
        <li>窓やドアを閉めて、蜂が室内に入らないようにしてください</li>
        <li>黒い服や香水は蜂を刺激しますので、外出時はご注意ください</li>
        <li>殺虫スプレーは蜂が興奮して逆効果の場合があります。使用はお控えください</li>
      </ul>
    </div>

    <div class="thanks-links">
      <h2>関連情報</h2>
      <ul>
        <li><a href="/bee-type/suzumebachi/">スズメバチの特徴と駆除方法</a></li>
        <li><a href="/bee-type/ashinagabachi/">アシナガバチの特徴と駆除方法</a></li>
        <li><a href="/faq/">よくある質問</a></li>
        <li><a href="/bee/">料金表</a></li>
      </ul>
    </div>
  </div>

</section>
```

---

### フォーム改善のためのContact Form 7設定案

現在のContact Form 7を拡張する設定:

```
[text* your-name placeholder "例: 山田 太郎"]
[tel* your-tel placeholder "例: 090-1234-5678"]
[email your-email placeholder "例: yamada@example.com"]
[text* your-address placeholder "例: 久留米市"]
[select bee-type "選択してください" "スズメバチ（大きい・攻撃的）" "アシナガバチ（細長い・足が長い）" "ミツバチ（小さい・丸い）" "わからない" "その他"]
[select nest-location "選択してください" "軒下" "ベランダ" "屋根裏・天井裏" "壁の中" "エアコン室外機の近く" "庭木・植え込みの中" "地面の中" "その他" "巣が見つからない"]
[select nest-size "選択してください" "ゴルフボール〜テニスボール大" "ソフトボール大" "バレーボール大" "バスケットボール大以上" "わからない"]
[file photo limit:5mb filetypes:jpg|jpeg|png|gif]
[select preferred-date "できるだけ早く" "今日中" "明日" "今週中" "相談して決めたい"]
[textarea your-message placeholder "例: ベランダの軒下に蜂の巣があるようです。"]
[submit "この内容で送信する"]
```

---
---

# 全体まとめ: 制作するページ一覧

| # | ページ | URL | 優先度 | 想定工数 |
|---|--------|-----|--------|---------|
| 1 | スズメバチの駆除 | `/bee-type/suzumebachi/` | ★★★★★ | 1日 |
| 2 | アシナガバチの駆除 | `/bee-type/ashinagabachi/` | ★★★★★ | 1日 |
| 3 | ミツバチの駆除 | `/bee-type/mitsubachi/` | ★★★★ | 1日 |
| 4 | 店舗案内（リニューアル） | `/about/` | ★★★★★ | 半日 |
| 5 | 施工事例（公開・拡充） | `/case/` | ★★★★★ | 2日 |
| 6 | よくある質問（拡充） | `/faq/` | ★★★★ | 半日 |
| 7 | お問い合わせ（改善） | `/contact/` | ★★★★ | 半日 |
| 8 | サンクスページ（改善） | `/thanks/` | ★★★ | 2時間 |

**合計想定工数**: 約5〜6日

---

### 必要な素材の確認リスト（クライアントに依頼）

| # | 素材 | 状況 | 必要なアクション |
|---|------|------|---------------|
| 1 | 代表の顔写真（笑顔・作業着） | 未撮影 | **撮影必須**（差別化の核） |
| 2 | 代表の作業中の写真 | 未撮影 | 撮影推奨 |
| 3 | 作業車両の写真 | 未撮影 | 撮影推奨 |
| 4 | 防護服・機材の写真 | 未撮影 | 撮影推奨 |
| 5 | 施工写真（ビフォーアフター） | uploads内に約60枚あり | 分類・選定が必要 |
| 6 | 蜂の種類別の写真 | 未撮影 | 自社撮影 or ストック素材 |
| 7 | 巣の種類別の写真 | 一部あり（uploads内） | 不足分を補充 |
| 8 | お客様の声 | 0件 | 施工後に収集開始 |
| 9 | 代表の経歴詳細 | 不明 | ヒアリング必要 |
| 10 | 電話番号の統一方針 | 2番号混在中 | **クライアント確認必須** |

---

*蜂の種類別ページ + 信頼構築ページ 詳細制作案: 2026-04-02*
