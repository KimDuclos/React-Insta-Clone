import React from 'react';
import CommentsSection from '../CommentsSection/CommentsSection';
import Header from './Header';
import './PostContainer.css';
import Likes from './Likes';

//set state of likes + add property
class FullPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userLike: props.post.userLike}
  };

  incLikes = () => {
    let likes = this.state.userLike;
    this.setState({userLike: likes++});
  };

  render() {
    return (
      // border for entire post and comments
      <div className="border">
        {/* header component that gets dummy data */}
        <Header 
          // username from dummy data
          username={this.props.post.username}
          // user thumbnail from dummy data
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        {/* container for only the image */}
        <div className="imgContainer">
          <img
            alt="posted img"
            className="image"
            // dummy data from imgURL
            src={this.props.post.imageUrl}
          />
        </div>
        {/* compenent that gets comments from dummy data */}
        <Likes incLikes={this.incLikes} likes={this.state.likes}/>
        <CommentsSection comments={this.props.post.comments} />
      </div>
      );
  }
}



//function to create post container not including contents
  

export default FullPost;