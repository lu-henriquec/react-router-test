import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

import './App.css';

function App() {
	return (
		<>
			<BrowserRouter>
				<Route render={({ location }) => {
					return (
						<Switch location={location}>
							<Route path="/" exact={true} component={Home} />
							<Route path="/sobre" component={About} />
						</Switch>
					);
				}}/>
			</ BrowserRouter>
		</>
	);
}

export default App;
