const moment = require("moment");

const customizeTweets = (tweets) => {
  return tweets.map(data => {
    let imgUrl = "";
    if(data.entities.media && data.entities.media.length > 0) imgUrl = data.entities.media[0].media_url;
    
    return {
      id: data.id,
      created_at: moment(new Date(data.created_at)).format("YYYY/MM/DD ddd HH:mm"),
      text: data.text,
      imgUrl: imgUrl
    }
  });
}

const getSpecificHashTweets = (specificHashTweetArr) => {
  const isHashtag = specificHashTweetArr.filter(obj => obj.entities.hashtags.length > 0);
  const sbux_100days = isHashtag.filter(hash => {
    const hashArr =  hash.entities.hashtags.filter(hash => {
      return hash.text === '100DaysOfStarbucks';
    });
    return hashArr.length > 0;
  })
  const tweet = sbux_100days.map(data => {
    return {
      id: data.id,
      created_at: data.created_at,
      text: data.text,
      entities: data.entities,
      extended_entities: data.extended_entities,
    };
  });
  return tweet;
}

module.exports = {
  customizeTweets,
  getSpecificHashTweets
}

