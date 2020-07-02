const moment = require("moment");

const getSpecificHashTweets = (specificHashTweetArr) => {
  return specificHashTweetArr.filter(allObj => allObj.entities.hashtags.length > 0)
    .filter(hashObj => {
      const hashArr =  hashObj.entities.hashtags.filter(hash => hash.text === '100DaysOfStarbucks');
      return hashArr.length > 0;
    })
    .map(data => {
      let imgUrl = "";
      if(data.entities.media && data.entities.media.length > 0) imgUrl = data.entities.media[0].media_url;
      return {
        id: data.id,
        created_at: moment(new Date(data.created_at)).format("YYYY/MM/DD ddd HH:mm"),
        imgUrl: imgUrl,
        full_text: data.full_text,
      }
    });
}

module.exports = {
  getSpecificHashTweets
}

