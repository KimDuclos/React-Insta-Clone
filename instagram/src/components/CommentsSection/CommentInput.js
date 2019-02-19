import React from 'react';

// form to accept comment from user - props not used yet.
const CommentInput = props => {
  return (
       <form>
        <input type="text" placeholder="Add comment... " className="commentBox"/>
      </form>
  );
};

export default CommentInput;