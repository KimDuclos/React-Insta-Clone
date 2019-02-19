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

  componentDidMount() {
    this.setState({post: dummyData});
  }

  
  render() {
    return (
      <div className="App">
        {/* call components */}
        <SearchBar />
        <PostContainer post={this.state.post} />
      </div>
    );
  }
}

export default App;