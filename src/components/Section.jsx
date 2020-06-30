import React from 'react';
import Garally from './Section/Garally/Garally';
import LargeWindow from './Section/LargeWindow';
import Posts from './Section/Posts/Posts';

function Section() {
  return (
    <section className="content">
      <article>
        <Garally />
        <LargeWindow />
        <Posts />
      </article>
    </section>
  );
}

export default Section;
