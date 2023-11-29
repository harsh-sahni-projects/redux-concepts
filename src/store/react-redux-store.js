// This file only uses react-redux (not toolkit);

import { createStore } from 'redux';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const TOGGLE = 'TOGGLE';


const initialState = {
  counter: 0,
  visible: true
}

const reducer = (state=initialState, action) => {
	if (action.type == INCREMENT) {
		return {
			counter: state.counter + 1,
			visible: state.visible
		}
	}
	if (action.type == DECREMENT) {
		return {
			counter: state.counter - 1,
			visible: state.visible
		}
	}
	if (action.type === TOGGLE) {
		return {
			counter: state.counter,
			visible: !state.visible
		}
	}
	
	return state;
}

const store = createStore(reducer);

export default store;