import React from 'react';
import Post from './FullPost';
import './PostContainer.css';

const PostContainer = props => {
  return (
    // map through dummy data to return array
    <div className="postContainer">
      {props.post.map(p => 
      // component thats gets info from dummy data
      <Post key={p.imgLink} post={p} />)}
    </div>
  );
};

export default PostContainer;