const moment = require("moment");

const customizeTweets = (datas) => {
  return datas.map(data => {
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
module.exports = {
  customizeTweets
}

