import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Andrew'
		}
	}
	render() {
		return <h1> Real estate </h1>;
	}
}

const app = document.getElementById('app');

ReactDOM.render(</App>,App)
