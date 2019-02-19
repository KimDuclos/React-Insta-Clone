import React from 'react';
import PropTypes from 'prop-types';
import './CommentsSection.css';

// gets comment data from dummy text
const Comments = props => {
  return (
    <div className="commentText">
      {/* username of comments already posted from dummy text*/}
      <div className="userName"> {props.comment.username}</div>
      {/* comments that were previously posted from dummy text */}
      <div className="commentOutput">{props.comment.text}</div>{' '}
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    // check if comment and username are strings
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comments;