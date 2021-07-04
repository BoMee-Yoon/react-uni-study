import React, { useContext }  from 'react';
import {DispatchContext} from "./CounterPage";

export default function ClickButton({ action, value }) {
	const dispatch = useContext(DispatchContext);
	
	const handleClick = ({ target: { dataset } }) => dispatch({
		type: dataset.action,
	});
	
	return <button data-action={ action } onClick={ handleClick }>{ value }</button>
}