import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateclassName = createGenerateClassName({
	productionPrefix: 'co'
});

export default () => {
	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateclassName}>
				<div>
					<Header />
					<h1>Hi there, from container, checking github actions as well!</h1>
					<hr />
					<MarketingApp />
				</div>
			</StylesProvider>
		</BrowserRouter>
	);
};
