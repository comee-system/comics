# comics

HttpRequestExceptionが出た文脈<br />
Windows10でSouceTree 2.4.8.0を使っています。<br />
プライベートのプロジェクトでコミットして、Pushボタンを押したら"HttpRequestException"が出てきました。<br />
もう一度Pushを押してみるとポップアップが開いてGitHubへログインを求められた。<br />
ユーザ－ネームとパスワードを打ち込んでみるも結果は変わらず。<br />
GitHubでログアウト → ログインしてみたのでパスワードは間違っていない。。。<br /><br />

エラー内容<br />
git -c diff.mnemonicprefix=false -c core.quotepath=false push -v --tags origin master:master<br />
fatal: HttpRequestException encountered.<br />
   An error occurred while sending the request.<br /><br />

remote: Invalid username or password.<br />
fatal: Authentication failed for 'https://github.com/xxxx/yyyy.git/'
<br /><br />
Pushing to https://github.com/xxxx/yyyy.git<br />
Completed with errors, see above.<br />
どうやって解決したのか。<br />
SouceTreeのメニューのAction → "Open in Terminal"<br />
Git bashが開く<br />
Git bashで"git push"<br />
再びGitHubへログインを求めるポップアップが出たのでログイン<br />
Pushできた。<br />
SouceTreeを開きなおして確認すると、Pushボタンから未プッシュを示すアイコンバッチが消えてる<br />
すぐに解決したけど、なんだったのだろう？<br />
(2018/02/25 追記：<br />
再びPushしようとしたら同様のエラーが出ました。<br />
根本的な解決にはなっていませんでした。<br />
)<br /><br />

解決法（2018/02/25 さらに追記)<br />
まったく同じ症状を解決された方がおりました。<br />
上記ブログの最後にある通り、Git Credential Managerの最新版（GCMW-1.14.0.exe）をインストールしたらSourceTreeでPushできるようになりました。

