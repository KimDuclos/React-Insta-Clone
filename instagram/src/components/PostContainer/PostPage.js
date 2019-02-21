import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostsContainer from './PostsContainer';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
        posts: [], 
        filtered: []}; //
  }


  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchHandler = e => {
    const posts = this.state.posts.filter(x => {
      if (x.username.includes(e.target.value)) {
        return x;
      }
    });
    this.setState({ filtered: posts });
  };


  render() {
    return (
      <div className="App">
        <SearchBar searchKeywords={this.state.searchTerm} searchedPosts={this.searchHandler}/>
        <PostsContainer posts={this.state.filtered.length > 0 ? this.state.filtered: this.state.posts}/>
      </div>
    );
  }
}

export default PostsPage;