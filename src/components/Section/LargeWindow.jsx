import React, { useState } from 'react';
import { useSelector } from "react-redux";
import './LargeWindow.scss';

function LargeWindow() {
  const yScroll = useSelector(state => state.yScroll);
  const windowTint = document.getElementById("window-tint");
  const [opacity, setOpacity] = useState(1);

  function animation(el) {
    if(yScroll > el.offsetTop - window.innerHeight){
      el.style.backgroundPosition = `center ${yScroll - el.offsetTop}px`;
  
      const newOpacity = (yScroll - el.offsetTop + 400) / (yScroll / 5);
      setOpacity(newOpacity)
    }
  }

  return (
    <>
      <h1>My 100days journey</h1>
      <hr />
      <p>Every day, we go to work hoping to do two things: share great coffee with our friends and help make the world a little better.<br />
      It was true when the first Starbucks opened in 1971, and it’s just as true today.</p>
      <hr />
      <div id="large-window" ref={el => {
        // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
        if(!el) return;
        animation(el);
      }}>
        <div id="window-tint">
          <div className="pic-text" styles={`opacity: ${opacity}`}>
            I love Coffee <strong>:)</strong>
            <a className="twitter-link" href="https://twitter.com/hashtag/100DaysOfStarbucks?f=live">#100DaysOfStarbucks</a>
            </div>
        </div>
      </div>
    </>
  );
}

export default LargeWindow;
