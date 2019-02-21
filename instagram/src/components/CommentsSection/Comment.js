import React from 'react';
import PropTypes from 'prop-types';
import Header from '../PostContainer/Header';

// gets comment data from dummy text
const Comments = props => {
  return (
    <div className="commentText">
      {/* username in new comment*/}
      <div className="userName"> {props.comment.username}</div>
      {/* add comment following username */}
      <div className="commentOutput">{props.comment.text}</div>
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