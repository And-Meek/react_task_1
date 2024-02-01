import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

//Декларативный

// export const App = () => {
// 	const currentYear = new Date().getFullYear();
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<p>{currentYear}</p>
// 			</header>
// 		</div>
// 	);
// };

export const App = () => {
	const currentYear = new Date().getFullYear();
	return createElement(
		'div',
		{
			className: 'App',
		},
		createElement(
			'header',
			{
				className: 'App-header',
			},
			createElement('img', {
				src: logo,
				className: 'App-logo',
			}),
			createElement(
				'p',
				null,
				'Edit ',
				createElement('code', null, 'src/App.js'),
				' and save to reload.',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('p', null, currentYear),
		),
	);
};
