import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import NewsList from './NewsList/NewsList';
import Home from './Home/Home';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/news" component={NewsList} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
