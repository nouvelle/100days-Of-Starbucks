import React from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import './App.scss';

function App() {
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
