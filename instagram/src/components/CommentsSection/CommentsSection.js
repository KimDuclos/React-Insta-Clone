import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    // set state and create property for new comments
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  componentDidMount() {
    const id = this.props.post;
    if (localStorage.getItem(id)) {
      this.setState({
        // structure dummy data correctly
        // 
        comments: JSON.parse(localStorage.getItem(this.props.newPost))
      });
    } else {
      this.storeComments();
    }
  }

  componenetWillUnmount() {
    this.storeComments();
  }

  storeComments = () => {
    localStorage.setItem(
      this.props.post,
      JSON.stringify(this.state.comments)
    );
  };

  commHandler = e => {
    this.setState({ comment: e.target.value });
  };

  submitComment = e => {
    e.preventDefault();
    const newComm = {
      text: this.state.comment,
      username: localStorage.getItem('user')
    };
    const comments = this.state.comments.slice();
    // add comment to list of already existing comments
    comments.push(newComm);
    // set initial state of comment
    this.setState({ comments, comment: '' });
  };

  render() {
    return (
      <div>
          {/* map through data to return an array with map */}
          {this.state.comments.map((x, y) => 
          // component with form
          <Comment key={y} comment={x} />
        )}
        {/* calling component - form for new comment */}
        <CommentInput comment={this.state.comment} submitComment={this.submitComment} changeComment={this.commHandler}/>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    // confirm comment and username are strings
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;