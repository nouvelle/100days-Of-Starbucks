# 100days-Of-Starbucks 

[https://koeri.surge.sh/](https://koeri.surge.sh/)
![image](https://user-images.githubusercontent.com/5979966/87044612-c1460900-c231-11ea-85f2-e6c16eefefee.png)


# このサイトについて

たまに、ハッシュタグ「#100DaysOfStarbucks」をつけて Starbucks について自由につぶやいています。  
これをまとめて表示しているWebサイトです。


# 構成

AWS Lambda + API Gateway を利用して、サーバレスアーキテクチャで Twitter API からデータを取得しています。  
コンテンツは [Surge](https://surge.sh/) という静的コンテンツのホスティングサービスに置いており、React で動いてます。  
Surgeは無料で使えてめちゃ手軽なのでおすすめです。

![architecture](https://user-images.githubusercontent.com/5979966/87047507-92ca2d00-c235-11ea-9f3e-e82e0953e9e2.png)


# その他

- パララクスでちょっとオシャレに演出してます
  - [これ](https://github.com/DevTips/Parallax-on-the-Web-DevTips-) を参考にさせていただきました
- 最初は Express でサーバ立てて動かしていたので、残骸のコードがGitHubに上がってます
  - 現在このコードは AWS Lambda に移行済
  - Express は使ってないけど、コメントを１行書き換えるだけで Express 経由で動くように残してます

