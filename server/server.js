const express = require("express");
const Twitter = require("twitter");
const { customizeTweets, getSpecificHashTweets } = require("./tweets");
require("dotenv").config();
const path = require("path");
const app = express();

const PORT = process.env.PORT || 2222;
const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

// https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline
// since_id : ページングに利用する。ツイートのIDを指定すると、これを含まず、これより未来のツイートを取得できる。
// max_id : ページングに利用する。ツイートのIDを指定すると、これを含まず、これより過去のツイートを取得できる。
app.get("/api", (req, res) => {
  const { since_id, max_id } = req.query;
  // 本文やURLの合計が140文字を超えるとextended_entitiesが出力されなくなるので、
  // これを回避するために、Resource URLに"tweet_mode=extended"を付ける
  let params = {
    screen_name: 'e_chai',
    count: 50,
    exclude_replies: true,
    tweet_mode: 'extended'
  };
  if(max_id) params = {...params, max_id: max_id};
  if(since_id) params = {...params, since_id: since_id};
  
  // tweets: 全応答データ
  client.get('statuses/user_timeline', params, (error, tweets, response) => {
    if (!error) {
      const customizeTweetArr = getSpecificHashTweets(tweets);
      res.send(customizeTweetArr);
    } else { 
      console.log(error);
      res.send("Hey :(");
    }
  });
});

// https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets
app.get("/api/search",  (req, res) => {
  // const params = { q: '100DaysOfStarbucks', count: 5 };
  const params = { q: 'Starbucks', count: 5 };
  client.get('search/tweets', params, (error, data, response) => {
    console.log(data);
    try {
      if(data.statuses[0]){
        const text = data.statuses.map(data => {
          const rtn = `${data.text}　<br />
          @${data.user.screen_name}　<br /><br />`;
          return rtn;
        });
        res.send("Hey :) " + `<br /><br />` +text);
      } else {
        res.send("Hey :) - 0件です。");
      }
    } catch (error) {
      console.log(error);
      res.send("Hey :(");
    }
  });
});



app.listen(PORT, () => {
  console.log(`App listening on ${PORT}!`)
});
