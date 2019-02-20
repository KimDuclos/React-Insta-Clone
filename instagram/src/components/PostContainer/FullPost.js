import React from 'react';
import CommentsSection from '../CommentsSection/CommentsSection';
import Header from './Header';
import './PostContainer.css';
import Likes from './Likes';

class FullPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {likes: props.post.likes}
  };
}

// function to increment likes
incLike = () => {
  this.setState({likes});
};

//function to create post container not including contents
const FullPost = props => {
  return (

    // border for entire post and comments
    <div className="border">
      {/* header component that gets dummy data */}
      <Header 
        // username from dummy data
        username={props.post.username}
        // user thumbnail from dummy data
        thumbnailUrl={props.post.thumbnailUrl}
      />
      {/* container for only the image */}
      <div className="imgContainer">
        <img
          alt="posted img"
          className="image"
          // dummy data from imgURL
          src={props.post.imageUrl}
        />
      </div>
      {/* compenent that gets comments from dummy data */}
      <Likes incrementLike={this.incLikes} likes={this.state.likes}/>
      <CommentsSection comments={props.post.comments} />
    </div>
    );
  }

export default FullPost;