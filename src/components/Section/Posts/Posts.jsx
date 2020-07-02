import React from 'react';
import { useSelector } from "react-redux";
import './Posts.scss';

function Posts() {
  const yScroll = useSelector(state => state.yScroll);
  const posts = useSelector(state => state.postData);
  const post = document.getElementsByClassName("post");

  function animation(el) {
    if(window.innerHeight > el.getBoundingClientRect().top + 50){
      for(let i = 0; i < post.length; i++){
        setTimeout(() => {
          post[i].classList.add("is-showing");
        }, 300 * (i + 1));
      }
    }
  }
  function PostList() {
    if(posts.length > 0) {
      return  posts.map(obj => 
        <div key={obj.id} className="post columns three">
          <img src={obj.img} alt="" />
          <h5>{obj.created_at}</h5>
          <p className="comment">{obj.comment}</p>
          <p><a className="btn" href={obj.link} target="_blank">Read More</a></p>
        </div>
      );
    }
  }
  
  return (
    <>
    <h1>My 100days journey</h1>
    <hr />
    <p>「人々の心を豊かで活力あるものにするために—<br />
      ひとりのお客様、一杯のコーヒー、そしてひとつのコミュニティから」<br /><br />
      それが、スターバックスのミッションです。</p>
    <hr />
    <div id="tweet-posts" className="row" ref={el => {
        // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
        if(!el) return;
        animation(el);
      }}>
      {PostList()}
    </div>
    </>
  );
}

export default Posts;
