const moment = require("moment");

const getSpecificHashTweets = (specificHashTweetArr) => {
  return specificHashTweetArr.filter(allObj => allObj.entities.hashtags.length > 0)
    .filter(hashObj => {
      const hashArr =  hashObj.entities.hashtags.filter(hash => hash.text === '100DaysOfStarbucks');
      return hashArr.length > 0;
    })
    .map(data => {
      const text = data.full_text.slice(0, data.full_text.length - 23);
      const link = data.full_text.slice(-23);
      let imgUrl = "";
      if(data.entities.media && data.entities.media.length > 0) imgUrl = data.entities.media[0].media_url;

      return {
        id: data.id,
        created_at: moment(new Date(data.created_at)).format("YYYY/MM/DD ddd HH:mm"),
        img: imgUrl,
        link: link,
        comment: text,
      }
    });
}

module.exports = {
  getSpecificHashTweets
}