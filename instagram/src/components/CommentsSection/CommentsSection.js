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

  
  
  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        // get data from dummy data and structure it correctly
        comments: JSON.stringify(localStorage.getItem(this.props.postId)
      )
    }); 
  }
  };

  componentWillUnmount() {
    this.storeComments(); // call storeComments to store comments when page refreshes
  }

  commHandler = e => {
    e.preventDefault(); //prevent auto refresh
    this.setState({ comments: e.target.value }); 
  };

  storeComments = () =>  // use local storage to keep comments after refresh
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };


  newCommentHandler = e => {
    e.preventDefault();  // prevent auto refresh after entering new comment

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
  render(); {
    return (
      <div>
        {/* map over comments from dummy data to return array for each post */}
        {this.state.comments.map((x, y) => 
        <Comment key={y} comment={x}/>)}
        <CommentInput submitComment={this.newCommentHandler} />
      </div>
    );
  }


  CommentsSection.propTypes = {
    // confirming array of strings
    comments: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
  };
  
export default CommentsSection;