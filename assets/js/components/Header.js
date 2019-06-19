import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Andrew'
		};
	}
	render() {
		return (
			<header>
				<div>Logo</div>

				<nav>
					<a href="#">create ads</a>
					<a href="#">about us</a>
					<a href="#">Log in</a>
					<a href="#" className="register btn">
						Register
					</a>
				</nav>
			</header>
		);
	}
}
