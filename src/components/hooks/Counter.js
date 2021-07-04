import React, { useContext } from 'react';
import ClickButton from "./ClickButton";
import {StateContext} from "./CounterPage";


const style = {
	width: '100px',
	height: '100px',
	margin: '100px',
	padding: '50px',
	backgroundColor: 'skyblue',
	textAlign: 'center'
};

export default function Counter() {
	
	const state = useContext(StateContext);
	
	return (
		<div style={ style }>
			<h1>{ state }</h1>
			<div>
				<ClickButton action='increase' value='++' />
				<ClickButton action='decrease' value='--' />
			</div>
		</div>
	)
}