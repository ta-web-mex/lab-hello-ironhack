import React from 'react';

function Footer() {
	return (
		<footer>
			<div className='card-container'>
				<img src='./images/icon1.png' alt='' />
				<p>React makes it painless to create interactive UIs.</p>
			</div>
			<div className='card-container'>
				<img src='./images/icon2.png' alt='' />
				<p>Build encapsulated component that manage their state.</p>
			</div>
			<div className='card-container'>
				<img src='./images/icon3.png' alt='' />
				<p>A set of inmutables values are passed to the components.</p>
			</div>
			<div className='card-container'>
				<img src='./images/icon4.png' alt='' />
				<p>Statically-typed design to run on modern browsers.</p>
			</div>
		</footer>
	);
}

export default Footer;
