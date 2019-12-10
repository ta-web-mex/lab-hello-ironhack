import React from "react";

function ElementBubbles(props) {
  return (
    <div className="bubbles">
			<div>
				<img src="/images/icon1.png"/>
				<p>React makes it painless to create interactive UIs.</p>
			</div>
			<div>
				<img src="/images/icon2.png"/>
				<p>Build encapsulated component that manage their state</p>
			</div>
			<div>
				<img src="/images/icon3.png"/>
				<p>A set of immutable values are passed to the components</p>
			</div>
			<div>
				<img src="/images/icon4.png"/>
				<p>Statically-typed designed to run on modern browsers.</p>
			</div>
    </div>
  );
}


export default ElementBubbles;