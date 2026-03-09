# OoT Generators - プロジェクト概要

## プロジェクト説明

**OoT Item Equip Generator** は、ゼルダの伝説 時のオカリナ（Ocarina of Time）のアイテム装備画面を生成するWebアプリケーションです。ユーザーは3つのCボタン（左・下・右）にアイテムを割り当て、装備画面のビジュアルを作成できます。

## 技術スタック

- **フレームワーク**: React 19.0.0 + TypeScript
- **ビルドツール**: Vite 6.2.0
- **UIライブラリ**: Material-UI (MUI) v6.4.7
- **スタイリング**: Emotion (@emotion/react, @emotion/styled)
- **状態管理**: React Hooks (useState, useEffect)
- **データ永続化**: LocalStorage

## プロジェクト構造

```
oot-generators/
├── src/
│   ├── apps/                       # アプリケーション群
│   │   └── item-equip-generator/   # アイテム装備ジェネレーター
│   │       ├── components/
│   │       │   ├── equipments-image/
│   │       │   │   └── index.tsx   # Canvas描画コンポーネント
│   │       │   └── modals/
│   │       │       └── item-select.tsx  # アイテム選択モーダル
│   │       ├── models/
│   │       │   └── item.ts         # アイテムデータ定義とLocalStorage管理
│   │       ├── assets/
│   │       │   └── images/
│   │       │       └── items/      # 全アイテムのPNG画像
│   │       └── index.tsx           # アプリケーション本体
│   ├── pages/
│   │   └── Menu.tsx                # アプリケーション一覧メニュー
│   ├── App.tsx                     # ルーティング管理
│   ├── main.tsx                    # アプリケーションエントリーポイント
│   ├── index.css                   # グローバルスタイル
│   └── vite-env.d.ts              # Vite型定義
├── public/                         # 静的ファイル
├── dist/                           # ビルド出力
├── index.html                      # HTMLエントリーポイント
├── vite.config.ts                  # Vite設定
├── tsconfig.json                   # TypeScript設定（ルート）
├── tsconfig.app.json               # アプリケーション用TS設定
├── tsconfig.node.json              # Node.js用TS設定
├── eslint.config.js                # ESLint設定
├── package.json                    # 依存関係とスクリプト
└── README.md                       # プロジェクト概要
```

## 主要コンポーネント

### 1. App.tsx
- クライアントサイドルーティング管理
- URLパスに基づいてページを切り替え
- ブラウザの戻る/進むボタンに対応（popstateイベント）

### 2. pages/Menu.tsx
- アプリケーション一覧メニュー画面
- 各アプリケーションをカード形式で表示
- アプリケーション情報の管理（ID、タイトル、説明、パス）

### 3. apps/item-equip-generator/index.tsx
- アイテム装備ジェネレーターのメインロジック
- 3つのアイテムスロット（left, down, right）の状態管理
- LocalStorageからの読み込み・保存処理
- レイアウト: Material-UIのContainer + Grid2

### 4. apps/item-equip-generator/components/equipments-image/index.tsx
- Canvas APIを使用した装備画面の描画
- 3つの黄色い円形ボタン（Cボタン）の描画
- クリック位置検出によるボタン選択ハンドリング
- アイテム画像の動的ロード・描画

### 5. apps/item-equip-generator/components/modals/item-select.tsx
- アイテム選択用モーダルUI
- 4行6列のアイテムグリッド表示
- スロット定義:
  - ボトル系アイテム（12種類）
  - 子供時代の交換アイテム（11種類）
  - 大人時代の交換アイテム（10種類）
  - 通常アイテム（各種武器・道具）
- サブモーダル対応（同一スロットに複数アイテムがある場合）

### 6. apps/item-equip-generator/models/item.ts
- 全アイテムの定義（約60種類）
- 型定義: `Item`, `Slot`, `Store`
- LocalStorage操作関数:
  - `saveToLocal()`: アイテム設定の保存
  - `fetchFromLocal()`: アイテム設定の読み込み

## データ構造

### Item型
```typescript
type Item = {
    name: string;      // アイテムID（例: 'deku-stick'）
    path: string | null; // 画像パス（nullは空スロット）
}
```

### Store型（LocalStorage保存形式）
```typescript
type Store = {
    items: {
        left: Item,   // 左Cボタン
        down: Item,   // 下Cボタン
        right: Item,  // 右Cボタン
    }
}
```

## アイテムカテゴリ

1. **基本アイテム**: デクの棒、デクの実、爆弾、弓矢など
2. **魔法アイテム**: ディンの炎、フロルの風、ネールの愛
3. **ボトル系**: 空きビン、虫入りビン、魚入りビン、ポーション類など
4. **お面**: キータンのお面、スカルのお面、真実のお面など
5. **交換アイテム**:
   - 子供時代: ニワトリ、ゼルダの手紙など
   - 大人時代: コッコ、奇妙なキノコ、処方箋など

## 機能

### メニュー画面
1. **アプリケーション一覧**: 利用可能なツールをカード形式で表示
2. **ナビゲーション**: カードクリックで各アプリケーションに遷移

### アイテム装備ジェネレーター
1. **アイテム選択**: モーダルから3つのCボタンにアイテムを割り当て
2. **ビジュアル生成**: Canvasで装備画面を動的に描画
3. **設定の永続化**: LocalStorageに自動保存
4. **デフォルト設定**: 初回起動時はデクの棒、フックショット、光の矢が設定される

## 開発コマンド

```bash
npm run dev      # 開発サーバー起動
npm run build    # 本番ビルド
npm run preview  # ビルド結果のプレビュー
npm run lint     # ESLintによるコード検証
```

## Canvas描画仕様

- **ボタン半径**: 32px
- **ボタン間隔**: 8px
- **配置**:
  - 左・右ボタン: 上段
  - 下ボタン: 下段中央
- **色**: `rgb(168, 168, 0)` (黄色)
- **キャンバスサイズ**: 216px × 112px

## 画像アセット

全アイテム画像は `src/assets/images/items/` に格納されています。
- 命名規則: 例 `stick.png`, `arrow_fire.png`, `bottle_milk.png`
- フォーマット: PNG
- サイズ: 64px × 64px（描画時にリサイズ）

## 既知の問題と改善点

1. **Canvas高さ指定のtypo**: `height='112x'` → `height='112px'` に修正が必要
2. **画像遅延ロード**: `Image.onload` が毎回発火する可能性あり
3. **Empty状態の扱い**: Emptyアイテムの視覚的フィードバックが限定的

## ライセンス

MIT License（LICENSE ファイル参照）

## 今後の拡張可能性

### 全体
- React Routerの導入（より堅牢なルーティング）
- 各アプリケーションの動的ロード（コード分割）
- タグ・カテゴリによるアプリケーション分類

### アイテム装備ジェネレーター
- 画像のエクスポート機能（PNG/SVG）
- プリセット機能（よく使う組み合わせを保存）
- ドラッグ&ドロップによるアイテム入れ替え
- 他のボタン（A、B、Z）への対応拡張
- レスポンシブデザインの改善
