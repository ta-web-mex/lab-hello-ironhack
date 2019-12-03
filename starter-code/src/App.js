import React, { Component } from 'react';
import Navbar from './components/Navbar';
import '../public/index.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<div className='container'>
				<Navbar />
				<Header />
				<Footer />
			</div>
		);
	}
}

export default App;
