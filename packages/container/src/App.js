import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

export default () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<h1>Hi there, from container, checking github actions as well!</h1>
				<hr />
				<MarketingApp />
			</div>
		</BrowserRouter>
	);
};
