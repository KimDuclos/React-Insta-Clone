import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentsSection extends React.Component {
  constructor(props) {
    super(props);
    // set state and add property for comments
    this.state = {
      comments: props.comments
    };
  }

  
  // mount - unmount
  componentDidMount() {

    const postId = this.props.post;
  };

  // componentWillUnmount() {
  //   // this.setComments();
  // }

  commHandler = e => {
    e.preventDefault();
    this.setState({ comments: e.target.value });
  };

  newCommentHandler = e => {
    e.preventDefault();

      // set state for new comment
      const newCom = { text: this.state.comment, username: 'test' };

      // select one from array and set to comment
      const comment = this.state.comments.slice();

      // add new comment to list of previous comments
      comment.push(newCom);

      // set state to new comment
      this.setState({comments:comment});
    
  };


  //output from user imput that comes through CommentInput component
  render() {
    return (
      <div>
        {/* map over comments from dummy data to return array for each post */}
        {this.state.comments.map((x, y) => 
        <Comment key={y} comment={x}/>)}
        <CommentInput submitComment={this.newCommentHandler} />
      </div>
    );
  }
}

CommentsSection.propTypes = {
  // confirming array of strings
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};


export default CommentsSection;