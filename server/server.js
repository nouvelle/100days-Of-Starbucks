const express = require("express");
const Twitter = require("twitter");
const { customizeTweets } = require("./tweets");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 2222;
const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline
// since_id : ページングに利用する。ツイートのIDを指定すると、これを含まず、これより未来のツイートを取得できる。
// max_id : ページングに利用する。ツイートのIDを指定すると、これを含まず、これより過去のツイートを取得できる。
app.get("/", (req, res) => {
  const { since_id, max_id } = req.query;
  let params = { screen_name: 'e_chai', count: 25, exclude_replies: true};
  if(max_id) params = {...params, max_id: max_id};
  if(since_id) params = {...params, since_id: since_id};
  
  client.get('statuses/user_timeline', params, (error, tweets, response) => {
    if (!error) {
      const isHashtag = tweets.filter(obj => obj.entities.hashtags.length > 0);
      const sbux_100days = isHashtag.filter(hash => {
        const hashArr =  hash.entities.hashtags.filter(hash => {
          return hash.text === '100DaysOfStarbucks';
        });
        return hashArr.length > 0;
      })
      const datas = sbux_100days.map(data => {
        return {
          id: data.id,
          created_at: data.created_at,
          text: data.text,
          entities: data.entities,
          extended_entities: data.extended_entities,
        };
      })
      
      const tweetsArr = customizeTweets(datas);
      const view = tweetsArr.map(t => {
        if(t.imgUrl){
          return (`
            <p>
              <div>${t.created_at}</div>
              <div>${t.text}</div>
              <img src=${t.imgUrl} width="200px"/>
              <p>${t.id}</p>
            </p>
          `);
        } else {
          return (`
          <p>
            <div>${t.created_at}</div>
            <div>${t.text}</div>
            <p>${t.id}</p>
          </p>
        `);
        }
      });
      
      // res.send(tweetsArr);
      res.send(view.join(''));
    } else { 
      console.log(error);
      res.send("Hey :(");
    }
  });
});

// https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets
app.get("/search",  (req, res) => {
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
