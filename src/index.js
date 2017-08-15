// create a new component. this component should product some HTML
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDyKCQW0Nu39ns1zPW76z3nzMUr1HPxcms';


// //example
// YTSearch({key: API_KEY, term: 'surf'}, function(data) {
// 	console.log(data);
// });

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		YTSearch({key: API_KEY, term: 'dogs'}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {

	return (
		<div>
			<SearchBar />
			<VideoDetail video={this.state.selectedVideo} />

			<VideoList
				onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos}
			/>

		</div>
	);

}
}

ReactDOM.render(<App />, document.querySelector('.app'));