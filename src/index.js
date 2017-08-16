// create a new component. this component should product some HTML
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

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
		this.videoSearch('dogs');
	}

	videoSearch(term) {
		console.log(term);
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {

		//debounced version of this.videoSerch
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

	return (
		<div>
			<SearchBar onSearchTermChange={videoSearch} />
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