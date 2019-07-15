import React from "react";

function App() {
	return (
		<div className="container">
			<div className="react-img">
				<header>
					<nav>
						<img className="img-left" src="./images/ironhack-logo.svg" />
						<img className="img-right" src="./images/menu-top.svg" />
					</nav>
				</header>
				<main>
					<div className="main-info">
						<h1>Say hello to ReactJS</h1>
						<p>You will learn a Frontened framework from scratch, to become a ninja Developer</p>

						<div>
							<a href="/">
								<strong>Awesome!</strong>
							</a>
						</div>
					</div>
				</main>
			</div>
			<div className="icons">
				<div>
					<img src="./images/icon1.png" />
					<p>React makes it painless to create intercative UIs.</p>
				</div>
				<div>
					<img src="./images/icon2.png" />
					<p>Build encapsulated components that manage their state.</p>
				</div>
				<div>
					<img src="./images/icon3.png" />
					<p>Asset of immutable values are passed to the components.</p>
				</div>
				<div>
					<img src="./images/icon4.png" />
					<p>Statically-typed, designed to run on modern browsers.</p>
				</div>
			</div>
		</div>
	);
}

export default App;
