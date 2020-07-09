import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import './App.scss';

function App() {
  const lastDataId = useSelector(state => state.lastDataId);
  const dispatch = useDispatch();
  
  window.addEventListener('scroll', () => {
    let yScroll = window.scrollY;

    dispatch({
      type: "SET_Y_SCROLL",
      yScroll
    })
  });

  const GetPostData = useCallback((param, val) => {
    // let url = "/api";
    // aws: api gateway
    let url = "https://2tcj5bmtk6.execute-api.us-east-1.amazonaws.com/v1/api";
    if(param) url += `?${param}=${val}`;
    fetch(url)
      .then(data => data.json())
      .then(postData => {
        // 前回の最後の投稿と、今回の最初の投稿が同じだからカット
        if(param && postData[0].id === lastDataId) postData = postData.slice(1);
        dispatch({
          type: "SET_POSTDATA",
          postData
        })
        dispatch({
          type: "SET_LAST_DATA_ID",
          lastDataId: postData[postData.length -1].id
        })
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastDataId]);
  
  function goToTop() {
    const now = window.pageYOffset;
    window.scrollTo(0, now - 100);
    if(now > 0) setTimeout(goToTop, 10);
  }
  
  useEffect(() => {
    GetPostData ();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if(lastDataId) GetPostData("max_id", lastDataId);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastDataId]);

  return (
    <>
      <Header />
      <Section />
      <Footer />
      <div id="goTop" onClick={goToTop}>↑</div>
    </>
  );
}

export default App;
