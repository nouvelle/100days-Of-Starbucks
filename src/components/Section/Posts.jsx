import React from 'react';
import { useSelector } from "react-redux";
import './Posts.scss';

function Posts() {
  const yScroll = useSelector(state => state.yScroll);
  const post1 = document.getElementById("post-1");
  const post3 = document.getElementById("post-3");

  function animation(el) {
    if(yScroll > el.offsetTop - window.innerHeight) {
      const offset = (Math.min(0, yScroll - el.offsetTop + window.innerHeight - 950)).toFixed();
  
      post1.style.transform = `translate(${offset}px, ${Math.abs(offset * 0.2)}px)`;
      post3.style.transform = `translate(${Math.abs(offset)}px, ${Math.abs(offset * 0.2)}px)`;
    }
  }
  
  return (
    <>
    <h1>My 100days journey</h1>
    <hr />
    <p>「人々の心を豊かで活力あるものにするために—<br />
      ひとりのお客様、一杯のコーヒー、そしてひとつのコミュニティから」<br /><br />
      それが、スターバックスのミッションです。</p>
    <hr />
    <div id="tweet-posts" className="row" ref={el => {
        // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
        if(!el) return;
        animation(el);
      }}>
      <div id="post-1" className="post columns four">
        <h5>Tweet title</h5>
        <img src="./img/post68.jpg" alt="" />
        <p>
          [68/100] #100DaysOfStarbucks <br />
          ゴロッと イチゴ フラペチーノ🍓<br />
        </p>
        <p><a className="btn" href="https://twitter.com/e_chai/status/1275646396734025728">Read More</a></p>
      </div>
      <div id="post-2" className="post columns four">
        <h5>Tweet title</h5>
        <img src="./img/post67.jpg" alt="" />
        <p>
          [67/100] #100DaysOfStarbucks <br />
          何ヶ月ぶりだろう、イートインスタバ🥺❤️
        </p>
        <p><a className="btn" href="https://twitter.com/e_chai/status/1271041858882252802">Read More</a></p>
      </div>
      <div id="post-3" className="post columns four">
        <h5>Tweet title</h5>
        <img src="./img/post66.jpg" alt="" />
        <p>
          [66/100] #100DaysOfStarbucks <br />
          スタバの と New Mac の初コラボ☀️
        </p>
        <p><a className="btn" href="https://twitter.com/e_chai/status/1270525690396291075">Read More</a></p>
      </div>
    </div>
    </>
  );
}

export default Posts;
