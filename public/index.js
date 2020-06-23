window.onscroll = () => {
  const logo = document.getElementById("logo");
  // const backHome = document.getElementById("back-home");
  // const foreHome = document.getElementById("fore-home");
  const tweetBox = document.getElementById("tweet-box");
  const figure = document.getElementsByTagName("figure");
  let yScroll = window.pageYOffset
  console.log(yScroll);

  logo.style.transform = `translate(0px, ${yScroll /2}%)`;
  // backHome.style.transform = `translate(0px, ${yScroll /4}%)`;
  // foreHome.style.transform = `translate(0px, -${yScroll /10}%)`;

  if(yScroll > tweetBox.offsetTop - window.innerHeight / 1.2){
    for(let i = 0; i < figure.length; i++){
      setTimeout(() => {
        figure[i].classList.add("is-showing");
      }, 150 * (i + 1));
    }
  }
}