import React from 'react';
import figureData from "../../../data/figures.json";

function Figure() {
  const figures = figureData.figures;
  console.log(figureData.figures);

  return (
    <>
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
    </>
  );
}

export default Figure;
