## やりたい

- DB連携

## 参考

- https://qiita.com/asagohan2301/items/cef8bcb969fef9064a5c

## メモ：Controllerに書くこと

- ルーティング定義
- HTTP に関する処理
- Pipe / Guard / Interceptor の適用
- Service 呼び出し

## 済

- BFFのポート変更
- エラー処理

## 一旦保留

- テストコード
- DTO（Data Transfer Object）とバリデーション
  - class-validator
  - class-transformer
    - class-transformer で Entity → DTO 変換
- 各種envファイルで持ったほうがいい値を移動する
- ChatGPTでの返答にあった「@Req() を使わずに書く方法（推奨）」
- ユーザー認証 ⇒ ちょっと複雑そうなので後回し。詳しくやってRoleごとの権限設定も含めての実装に挑戦する
  - 次のタイミングで挑戦するのはRole実装はなしで、下記までやる
    - ユーザー登録（API側の登録権限なし、フロントエンドでリンク表示だけ制御）
    - ユーザー認証（ログイン画面、登録していないユーザーの場合エラー出す）
    - 対応するユーザーのTODO表示
