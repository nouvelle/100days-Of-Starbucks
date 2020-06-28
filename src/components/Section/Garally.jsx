import React from 'react';
import './Garally.scss';

function Garally() {
  return (
    <>
      <h1>My 100days journey</h1>
      <hr />
      <p>This is my 100 days of journey. <br />これは私の100日の軌跡です。</p>
      <hr />
      <div id="tweet-box">
        <div className="row img-row">
          <figure className="columns four">
            <img src="./img/tate01.jpg" alt="" />
            <figcaption>1st Store in Japan. <strong>2019/08/02</strong></figcaption>
          </figure>
          <figure className="columns four">
            <img src="./img/tate02.jpg" alt="" />
            <figcaption>Frappuccino! <strong>2020/02/12</strong></figcaption>
          </figure>
          <figure className="columns four">
            <img src="./img/tate03.jpg" alt="" />
            <figcaption>drinking coffee Santa <strong>2019/12/23</strong></figcaption>
          </figure>
        </div>
        <div className="row img-row no-sp">
          <figure className="columns four">
            <img src="./img/tate03.jpg" alt="" />
            <figcaption>drinking coffee Santa <strong>2019/12/23</strong></figcaption>
          </figure>
          <figure className="columns four">
            <img src="./img/tate01.jpg" alt="" />
            <figcaption>1st Store in Japan. <strong>2019/08/02</strong></figcaption>
          </figure>
          <figure className="columns four">
            <img src="./img/tate02.jpg" alt="" />
            <figcaption>Frappuccino! <strong>2020/02/12</strong></figcaption>
          </figure>
        </div>
        <div className="row img-row no-sp">
          <figure className="columns four">
            <img src="./img/tate02.jpg" alt="" />
            <figcaption>Frappuccino! <strong>2020/02/12</strong></figcaption>
          </figure>
          <figure className="columns four">
            <img src="./img/tate03.jpg" alt="" />
            <figcaption>drinking coffee Santa <strong>2019/12/23</strong></figcaption>
          </figure>
          <figure className="columns four">
            <img src="./img/tate01.jpg" alt="" />
            <figcaption>1st Store in Japan. <strong>2019/08/02</strong></figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}

export default Garally;
