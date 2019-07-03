import React from 'react';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {
	CSSTransition,
	TransitionGroup,
} from 'react-transition-group';

import Home from './pages/Home';
import About from './pages/About';

import './App.css';

function App() {
	return (
		<>
			<BrowserRouter>
				<div className="nav">
					<Link exact to="/" activeClassName="active">Home</Link>
					<Link to="/sobre" activeClassName="active">About</Link>
				</div>
				<Route render={({ location }) => {
					const { key } = location;
					return (
						<TransitionGroup component={null}>
							<CSSTransition
							key={key}
							appear={true}
							timeout={450}
							classNames="fade"
							>
								<Switch location={location}>
									<Route path="/" exact={true} component={Home} />
									<Route path="/sobre" component={About} />
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					);
				}}/>
			</ BrowserRouter>
		</>
	);
}

export default App;
