import React from 'react';

import Navbar from './Navbar/Navbar';
import NewsList from './NewsList/NewsList';
import Search from './Search/Search';

function App() {
	return (
		<div>
			<Navbar />
			<NewsList />
			<Search />
		</div>
	);
}

export default App;
