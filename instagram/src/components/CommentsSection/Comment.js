import React from 'react';
import PropTypes from 'prop-types';
import './CommentsSection.css';

// gets comment data from dummy text
const Comments = props => {
  return (
    <div className="commentText">
      {/* comments that were previously posted from dummy text */}
      <span className="commentOutput">{props.comment.text}</span>{' '}
      {/* username of comments already posted from dummy text*/}
      <span className="userName">-{props.comment.username}</span>
    </div>
  );
};

Comment.propTypes = {
   //confirms comment structure is correct
  comment: PropTypes.shape({
    //confirm comment text is a string
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comments;