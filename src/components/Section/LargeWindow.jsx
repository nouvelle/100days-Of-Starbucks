import React from 'react';
import './LargeWindow.scss';

function LargeWindow() {
  return (
    <>
      <h1>My 100days journey</h1>
      <hr />
      <p>Every day, we go to work hoping to do two things: share great coffee with our friends and help make the world a little better.<br />
      It was true when the first Starbucks opened in 1971, and it’s just as true today.</p>
      <hr />
      <div id="large-window">
        <div id="window-tint">
          <div className="pic-text">I love Coffee <strong>:)</strong><a className="twitter-link" href="https://twitter.com/hashtag/100DaysOfStarbucks?f=live">#100DaysOfStarbucks</a></div>
        </div>
      </div>
    </>
  );
}

export default LargeWindow;
