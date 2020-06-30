import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import './App.scss';

function App() {
  const yScroll = useSelector(state => state.yScroll);
  const dispatch = useDispatch();
  
  window.addEventListener('scroll', () => {
    let yScroll_acvive = window.scrollY
    console.log(yScroll);
    dispatch({
      type: "SET_Y_SCROLL",
      yScroll_acvive
    })
  });

  // fetch('/api').then(data => data.json()).then(data => console.log(data));
  // fetch('/api?max_id=1232608893299093500').then(data => data.json()).then(data => console.log(data));
  // fetch('/api?max_id=1213973259244331000').then(data => data.json()).then(data => console.log(data));
  // fetch('/api?max_id=1150713127425589200').then(data => data.json()).then(data => console.log(data));
  // fetch('/api?max_id=1131925837228339200').then(data => data.json()).then(data => console.log(data));
  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  );
}

export default App;
