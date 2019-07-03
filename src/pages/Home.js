import React from 'react';
import logo from '../logo.svg';

import { Link } from 'react-router-dom'

function Home() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<Link className="App-link" to="/sobre">Ir para a página sobre \o/</Link>
			</header>
		</div>
	);
}

export default Home;
