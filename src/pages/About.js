import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom'

function About() {
	const itens = useSelector( state => state.itens);
	return (
		<>
			<ul>
				{itens.map( item => <li key={item}>{item}</li>)}
			</ul>
			<Link className="App-link" to="/">Ir para a página Home \o/</Link>
		</>
	);
}

export default About;
