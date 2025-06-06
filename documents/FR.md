# MudaMeter PoC 機能要件定義書（Functional Requirements Document）

## 1. はじめに

本書は、MudaMeter PoCにおける各機能の具体的な要件を定義するものである。PoCフェーズでは、サービスコンセプトの仮説検証を目的とし、最小限の構成で動作するプロトタイプの開発を対象とする。

---

## 2. 用語定義

* **消費**：生活必需に関する支出
* **浪費**：無くても困らない、満足度が低い支出
* **投資**：将来の価値創出が期待できる支出
* **自動分類**：事前定義されたルールにより支出を3分類に振り分ける機能

---

## 3. 機能一覧

| ID    | 機能名              | 概要                                     |
| ----- | ---------------- | -------------------------------------- |
| FR-01 | 支出入力機能           | ユーザーが支出を入力できるフォームを提供する                 |
| FR-02 | 自動分類機能           | 入力された支出に対して「消費・浪費・投資」を自動判定する           |
| FR-03 | 手動分類修正機能         | 自動判定された分類をユーザーが変更できるようにする              |
| FR-04 | 支出一覧機能           | 入力済み支出を日付降順で一覧表示する                     |
| FR-05 | 支出編集・削除機能        | 登録済み支出の内容を編集・削除できる                     |
| FR-06 | 浪費割合グラフ表示機能      | 月別の「浪費・消費・投資」の割合をグラフで可視化する             |
| FR-07 | ランキング表示機能        | 浪費額の大きいカテゴリや個別支出のランキングを表示する            |
| FR-08 | データ永続化機能         | IndexedDBにより支出データをローカル保存する             |
| FR-09 | スマホ最適化対応         | モバイル端末向けにUIをレスポンシブ対応させる                |
| FR-10 | 初期カテゴリ設定         | 初期カテゴリ（例：食費、外食、書籍など）をプリセットで提供する        |
| FR-11 | カスタムカテゴリ追加機能     | ユーザーがカテゴリを新規作成できるようにする                 |
| FR-12 | 感情タグ付け機能（簡易AI体験） | 支出ごとに「満足」「後悔」タグをユーザーが付与できる（擬似AI体験演出あり） |

---

## 4. 各機能の要件詳細

### FR-01 支出入力機能

* 金額、日付、カテゴリ、メモの入力フィールドを持つ
* 入力完了と同時にFR-02をトリガーする

### FR-02 自動分類機能

* 分類は固定の3種類（消費・浪費・投資）
* 初期ルール例：

  * 食費→消費
  * 外食→浪費
  * 書籍→投資
* 分類結果は支出一覧とグラフに反映

### FR-03 手動分類修正機能

* 自動分類の選択肢をセレクトボックスで再設定可能にする

### FR-04 支出一覧機能

* 月単位のフィルタリングに対応
* 支出ごとの分類、金額、カテゴリ、日付を表示

### FR-05 支出編集・削除機能

* 一覧画面から対象支出の編集・削除が可能

### FR-06 浪費割合グラフ表示機能

* 円グラフまたは棒グラフで表示
* 対象月の合計支出に対する各分類の比率を表示

### FR-07 ランキング表示機能

* 上位3カテゴリの浪費合計を表示
* 上位3個別支出の浪費額を表示

### FR-08 データ永続化機能

* IndexedDBを利用し、最大1,000件程度の保存に対応
* 初回ロード時に過去データを取得し一覧へ反映

### FR-09 スマホ最適化対応

* 画面幅375pxを基準にデザイン
* タップ操作に配慮したUI構成

### FR-10 初期カテゴリ設定

* プリセットカテゴリとして以下を提供：

  * 食費、外食、日用品、書籍、趣味、交際費、医療、美容

### FR-11 カスタムカテゴリ追加機能

* 入力フォームから新規カテゴリ名を追加可能
* 追加カテゴリも自動分類ロジックの対象とする（初期分類は浪費）

### FR-12 感情タグ付け機能

* 支出入力・編集時に「満足」「後悔」いずれかの選択可
* 感情に応じて擬似コメント（例：「満足ならOK！」「それはちょっと浪費かも…？」）を表示

---

## 5. 非機能要件との関係

* 各機能は完全にローカル上で動作し、外部APIとの連携を行わない
* フロントエンドのみで構成されるSPA（シングルページアプリケーション）
* 技術的制約：IndexedDBによる保存容量制限あり

---

## 6. 除外事項

* ログイン／ユーザー管理機能は実装しない
* バックアップ／データエクスポート機能は実装しない
* クラウド保存／複数端末同期機能は対象外

---