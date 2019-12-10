import React from 'react';
import Nav from "./components/Nav";
import HeaderSec from "./components/HeaderSec"
import ElementBubbles from "./components/ElementBubbles"
import '../styles.css'

function App() {
  return (
    <div className="container">
			<Nav />
			<HeaderSec />
			<ElementBubbles />
    </div>
  );
}

// module.exports = App
export default App;

