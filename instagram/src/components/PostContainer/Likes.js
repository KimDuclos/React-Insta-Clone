import React from 'react';

const Likes = props => {
  return [
    <div
      className="socialIconsContainer"
      key="socialIcons"
      onClick={props.incLikes}
    >

      {/* icon to like a post */}
      <div className="likeHeartIcon"> 
        <i className="far fa-heart fa-2x" />
      </div>

      {/* icon to add a comment to the post */}
      <div className="commentIcon">
        <i className="far fa-comment fa-2x" />
      </div>

    </div>,
    <div className="likesContainer" key="socialIcons">
      <div className="likeIcon">{props.likes}</div>
    </div>
  ];
};

export default Likes;