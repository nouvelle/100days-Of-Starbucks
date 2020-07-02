import React from 'react';
import figureData from "../../../data/figures.json";

function Figure() {
  const figures = figureData.figures;

  function figureList() {
    if(figures.length > 0) {
      return  figures.map(obj => 
        <figure key={obj.id} className="columns four">
          <img src={obj.img} alt="" />
          <figcaption>{obj.captipn} <strong>{obj.date}</strong></figcaption>
        </figure>
      );
    }
  }

  return (
    <>
      <div className="row img-row">
        {figureList()}
      </div>
    </>
  );
}

export default Figure;
