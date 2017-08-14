// create a new component. this component should product some HTML
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDyKCQW0Nu39ns1zPW76z3nzMUr1HPxcms';


//example
YTSearch({key: API_KEY, term: 'surf'}, function(data) {
	console.log(data);
});

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			videos: []
		};

		YTSearch({key: API_KEY, term: 'surf'}, (videos) => {
			this.setState({
				videos
			})
		});

	}

	render() {

	return (
		<div>
			<SearchBar />
			<VideoList videos={this.state.videos} />
		</div>
	);

}
}

ReactDOM.render(<App />, document.querySelector('.app'));