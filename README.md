# comics
SourceTreeでpushしようとしたらHttpRequestExceptionが出た
GitHub
SourceTree
Windows10
HttpRequestExceptionが出た文脈
Windows10でSouceTree 2.4.8.0を使っています。
プライベートのプロジェクトでコミットして、Pushボタンを押したら"HttpRequestException"が出てきました。
もう一度Pushを押してみるとポップアップが開いてGitHubへログインを求められた。
ユーザ－ネームとパスワードを打ち込んでみるも結果は変わらず。
GitHubでログアウト → ログインしてみたのでパスワードは間違っていない。。。

エラー内容
git -c diff.mnemonicprefix=false -c core.quotepath=false push -v --tags origin master:master
fatal: HttpRequestException encountered.
   An error occurred while sending the request.

remote: Invalid username or password.
fatal: Authentication failed for 'https://github.com/xxxx/yyyy.git/'

Pushing to https://github.com/xxxx/yyyy.git
Completed with errors, see above.
どうやって解決したのか。
SouceTreeのメニューのAction → "Open in Terminal"
Git bashが開く
Git bashで"git push"
再びGitHubへログインを求めるポップアップが出たのでログイン
Pushできた。
SouceTreeを開きなおして確認すると、Pushボタンから未プッシュを示すアイコンバッチが消えてる
すぐに解決したけど、なんだったのだろう？
(2018/02/25 追記：
再びPushしようとしたら同様のエラーが出ました。
根本的な解決にはなっていませんでした。
)

解決法（2018/02/25 さらに追記)
まったく同じ症状を解決された方がおりました。
上記ブログの最後にある通り、Git Credential Managerの最新版（GCMW-1.14.0.exe）をインストールしたらSourceTreeでPushできるようになりました。
