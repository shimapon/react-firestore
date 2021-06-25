# React で firestore を使ってみた

# 使用手順

まずクローンしたら、

```bash
yarn install
```

## firebase での操作

### プロジェクトを作成

プロジェクト名は何でも良い

### データベースを作成

- database の作成ボタンをおす
- テスト環境で開始を選択
- ロケーションは asia-northeast1（東京）に設定

## 接続用コンポーネントを作成する

- </>アイコンをおす
- 名前は何でも良い
- 発行された firebaseConfig を`/src/firebase.js`の所に挿入

## これで OK!!

実行

```bash
yarn start
```
