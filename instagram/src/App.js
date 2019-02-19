import React, {Component} from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    // set state, create property for data file
    this.state = {
      post: dummyData  
    };
  }

  // set data to component's state
  componentDidMount() {
    this.setState({post: dummyData});
  }

  
  render() {
    return (
      <div className="App">
      post={this.state}
        {/* call components */}
        <SearchBar />
        {/* use state object to pass data to PostContainer component */}
        <PostContainer post={
           this.state.post 
        } />
      </div>
    );
  }
}

export default App;