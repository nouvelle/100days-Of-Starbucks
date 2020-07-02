import React from 'react';
import { useSelector } from "react-redux";
import postsData from "../../../data/posts.json";
import './Posts.scss';

function Posts() {
  const yScroll = useSelector(state => state.yScroll);
  const post = document.getElementsByClassName("post");
  const posts = postsData.posts;

  function animation(el) {
    if(window.innerHeight > el.getBoundingClientRect().top + 50){
      for(let i = 0; i < post.length; i++){
        setTimeout(() => {
          post[i].classList.add("is-showing");
        },  (1000 * (Math.exp(i * 0.14))) - 700);
      }
    }
  }
  function PostList() {
    if(posts.length > 0) {
      return  posts.map(obj => 
        <div key={obj.id} className="post columns four">
          <h5>{obj.title}</h5>
          <img src={obj.img} alt="" />
          <p>{obj.comment}</p>
          <p><a className="btn" href={obj.link}>Read More</a></p>
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
