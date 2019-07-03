import React from 'react';
import logo from '../logo.svg';

import { Link } from 'react-router-dom'

function About() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/About.js</code> and save to reload.
				</p>
				<Link className="App-link" to="/">Ir para a página Home \o/</Link>
			</header>
		</div>
	);
}

export default About;
