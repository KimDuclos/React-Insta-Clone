import React from 'react';
import CommentSection from '../CommentsSection/CommentsSection';
import Header from './Header';
import './PostContainer.css';

const FullPost = props => {
  return (

    // border for entire post and comments
    <div className="border">
      {/* header component that gets dummy data */}
      <Header 
        // username from dummy data
        username={props.post.username}
        // user thumbnail from dummy data
        thumbnailUrl={props.post.thumbnailUrl}
      />
      {/* container for only the image */}
      <div className="imgContainer">
        <img
          alt="posted img"
          className="image"
          // dummy data from imgURL
          src={props.post.imageUrl}
        />
      </div>
      {/* compenent that gets comments from dummy data */}
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default FullPost;