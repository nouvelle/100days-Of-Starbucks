window.onscroll = () => {
  const logo = document.getElementById("logo");
  // const backHome = document.getElementById("back-home");
  // const foreHome = document.getElementById("fore-home");
  const tweetBox = document.getElementById("tweet-box");
  const figure = document.getElementsByTagName("figure");
  const largeWindow = document.getElementById("large-window");
  const windowTint = document.getElementById("window-tint");
  let yScroll = window.pageYOffset
  console.log(yScroll);

  logo.style.transform = `translate(0px, ${yScroll /2}%)`;
  // backHome.style.transform = `translate(0px, ${yScroll /4}%)`;
  // foreHome.style.transform = `translate(0px, -${yScroll /10}%)`;

  // 縦スクロールの位置が "tweetBox - 画面の高さ / 1.2" だったら...
  // つまり、tweetBox のちょい上になったら下記が動作する
  if(yScroll > tweetBox.offsetTop - window.innerHeight / 1.2){
    for(let i = 0; i < figure.length; i++){
      setTimeout(() => {
        figure[i].classList.add("is-showing");
      }, 150 * (i + 1));
    }
  }

  // 縦スクロールの位置が "largeWindow - 画面の高さ" だったら...
  // つまり、largeWindow が画面の bottom に触れたら下記が動作する
  if(yScroll > largeWindow.offsetTop - window.innerHeight){
    largeWindow.style.backgroundPosition = `center ${yScroll - largeWindow.offsetTop}px`;

    const opacity = (yScroll - largeWindow.offsetTop + 400) / (yScroll / 5);
    windowTint.style.opacity = `${opacity}`;
  }
}