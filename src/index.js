import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// Create a new component and it should produce some html
// const App = function(){
//   return <div>Hi!</div>;
// }
// ReactDOM.render(<App />, document.querySelector('.container'));

// const App = () => { //identical code as above
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

const API_KEY = 'AIzaSyAWepzeRaAYs5vn_yhE0yUYu2W7xPkfXTk';

// YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
//   console.log(data);
// });

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');

    // YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
    //   this.setState({
    //     videos: videos,
    //     selectedVideo: videos[0]
    //   });
    //   //this.setState({videos:videos})
    //   //console.log(videos);
    // });
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
