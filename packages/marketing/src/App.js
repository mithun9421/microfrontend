import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateclassName = createGenerateClassName({
	productionPrefix: 'ma'
});

console.log('iteration 1');
export default () => {
	return (
		<div>
			<StylesProvider generateClassName={generateclassName}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/pricing" component={Pricing} />
						<Route exact path="/" component={Landing} />
					</Switch>
				</BrowserRouter>
			</StylesProvider>
		</div>
	);
};
