import React from 'react';
import { useSelector } from "react-redux";
import './Header.scss';

function Header() {
  const yScroll = useSelector(state => state.yScroll);

  return (
    <>
      <header className="home-box">
        <div id="logo" styles={`
          transform: translate(0px, ${yScroll /2}%)
        `}>#100DaysOfStarbucks</div>
      </header>
    </>
  );
}

export default Header;
