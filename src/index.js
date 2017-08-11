// create a new component. this component should product some HTML
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDyKCQW0Nu39ns1zPW76z3nzMUr1HPxcms';


const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.app'));