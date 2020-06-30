window.onscroll = () => {
  // const logo = document.getElementById("logo");
  // const backHome = document.getElementById("back-home");
  // const foreHome = document.getElementById("fore-home");
  const tweetBox = document.getElementById("tweet-box");
  const figure = document.getElementsByTagName("figure");
  const largeWindow = document.getElementById("large-window");
  const windowTint = document.getElementById("window-tint");
  const tweetPosts = document.getElementById("tweet-posts");
  const post1 = document.getElementById("post-1");
  const post2 = document.getElementById("post-2");
  const post3 = document.getElementById("post-3");
  let yScroll = window.pageYOffset
  // console.log(yScroll);

  // logo.style.transform = `translate(0px, ${yScroll /2}%)`;
  // backHome.style.transform = `translate(0px, ${yScroll /4}%)`;
  // foreHome.style.transform = `translate(0px, -${yScroll /10}%)`;

  // getBoundingClientRect() : 画面左上を基準とする位置
  // tweetBox のちょい上になったら下記が動作する
  if(yScroll > tweetBox.getBoundingClientRect().top / 1.9){
    for(let i = 0; i < figure.length; i++){
      setTimeout(() => {
        figure[i].classList.add("is-showing");
      // }, 150 * (i + 1));
      },  (700 * (Math.exp(i * 0.14))) - 700);
    }
  }

  // 縦スクロールの位置が "largeWindow - 画面の高さ" だったら...
  // つまり、largeWindow が画面の bottom に触れたら下記が動作する
  if(yScroll > largeWindow.offsetTop - window.innerHeight){
    largeWindow.style.backgroundPosition = `center ${yScroll - largeWindow.offsetTop}px`;

    const opacity = (yScroll - largeWindow.offsetTop + 400) / (yScroll / 5);
    windowTint.style.opacity = `${opacity}`;
  }

  // 縦スクロールの位置が "tweetPosts - 画面の高さ" だったら...
  // つまり、tweetPosts が画面の bottom に触れたら下記が動作する
  if(yScroll > tweetPosts.offsetTop - window.innerHeight) {
    const offset = (Math.min(0, yScroll - tweetPosts.offsetTop + window.innerHeight - 950)).toFixed();

    post1.style.transform = `translate(${offset}px, ${Math.abs(offset * 0.2)}px)`;
    post3.style.transform = `translate(${Math.abs(offset)}px, ${Math.abs(offset * 0.2)}px)`;
  }
}