import React from 'react';


// form to accept comment from user - props not used yet.
const CommentInput = props => {
  return (
    // form now allows input from user
    <form onSubmit={props.submitComment}>
      <input className="commentBox" type="text" value={props.comment} placeholder="Add comment... " onChange={props.changeComment}/>
    </form>
  );
};



export default CommentInput;