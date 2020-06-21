const moment = require("moment");

const customizeTweets = (datas) => {
  return datas.map(data => {
    let imgUrl = "";
    if(data.entities.media && data.entities.media.length > 0){
      // console.log("media :", data.entities.media[0].media_url);
      imgUrl = data.entities.media[0].media_url;
    // } else if(data.entities.urls && data.entities.urls.length > 0){
    //   console.log("urls :", data.entities);
    //   imgUrl = data.entities.urls[0].url;
    }
    return {
      // created_at: moment(data.created_at).format("YYYY/MM/DD ddd HH:mm"),
      id: data.id,
      created_at: data.created_at,
      text: data.text,
      imgUrl: imgUrl
    }
  });
}
module.exports = {
  customizeTweets
}

