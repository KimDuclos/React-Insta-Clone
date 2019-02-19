import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    // set state and add property for comments
    this.state = {
      comments: props.comments
    };
  }

  //output from user imput that comes through CommentInput component
  render() {
    return (
      <div>
        {/* map over comments from dummy data to return array for each post */}
        {this.state.comments.map((x, y) => 
        <Comment key={y} comment={x}/>)}
        <CommentInput />
      </div>
    );
  }
}


export default CommentSection;