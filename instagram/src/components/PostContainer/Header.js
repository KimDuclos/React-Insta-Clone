import React from 'react';
import './PostContainer.css';

const PostHead = props => {
  return (
    <div className="header">
      <div className="thumbnailContainer">
        <img
          alt="post head"
          className="thumbnail"
          // gets thumbnail from dummy data array in PostContainer
          src={props.thumbnailUrl}
        />
      </div>
      {/* gets username from dummy data array in PostContainer */}
      <div className='userName'>{props.username}</div>
    </div>
  );
};

export default PostHead;