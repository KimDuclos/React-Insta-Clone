import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
// import CommentsSection from './CommentsSection';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div className='App'>
          <SearchBar/>
          <PostContainer/>
          {/* <CommentsSection/> */}
      </div>
    )
  }
}

export default App;
