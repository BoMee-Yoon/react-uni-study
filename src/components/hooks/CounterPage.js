import React, { useReducer, createContext } from 'react';
import Counter from "./Counter";

export const StateContext = createContext(0);
export const DispatchContext = createContext(null);

const reducer = (state, action) => {
	switch (action.type) {
		case 'increase':
			return state + 1;
		case 'decrease':
			return state -1;
		default:
			throw new Error('plz check the action type');
	}
}

export default function CounterPage() {
	const [state, dispatch] = useReducer(reducer, 0);
	return (
		<StateContext.Provider value={ state }>
			<DispatchContext.Provider value={ dispatch }>
				<Counter />
			</DispatchContext.Provider>
		</StateContext.Provider>
	)
}