// This file only requires `npm install redux` package

const redux = require('redux');

const initialState = {
		counter: 0
}

const reducer = (state=initialState, action) => {
		if (action.type == 'increment') 
				return {
						counter: state.counter + 1
				}

		if (action.type == 'decrement')
				return {
					counter: state.counter-1
				}

		return state;
}

const store = redux.createStore(reducer);

console.log('Initial state:', store.getState());

const counterSubscriber = () => {
		const latestState = store.getState();
		console.log(latestState);
}

store.subscribe(counterSubscriber); // run "counterSubscriber()" every time the state changes

store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })