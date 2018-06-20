import React from 'react';
import "./Pic.css";


const Pic = props => (
	<div 
	className="allCards col-xs-6" 
	key={props.id}
	onClick={() => props.handleClick(props.id, props.clicked)}
	>
		<img 
		id={props.name}
		src={props.image}
		alt={props.name}
		/>
	</div>
);

export default Pic;