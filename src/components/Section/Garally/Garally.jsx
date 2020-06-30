import React from 'react';
import { useSelector } from "react-redux";
import Figure from "./Figure";
import './Garally.scss';

function Garally() {
  const yScroll = useSelector(state => state.yScroll);
  const figure = document.getElementsByTagName("figure");

  // tweetBox のちょい上になったら下記が動作する
  function animation(el) {
    if(yScroll > el.getBoundingClientRect().top / 1.9){
      for(let i = 0; i < figure.length; i++){
        setTimeout(() => {
          figure[i].classList.add("is-showing");
        },  (700 * (Math.exp(i * 0.14))) - 700);
      }
    }
  }

  return (
    <>
      <h1>My 100days journey</h1>
      <hr />
      <p>This is my 100 days of journey. <br />これは私の100日の軌跡です。</p>
      <hr />
      <div id="tweet-box" ref={el => {
        // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
        if(!el) return;
        animation(el);
      }}>
        <Figure />
      </div>
    </>
  );
}

export default Garally;
