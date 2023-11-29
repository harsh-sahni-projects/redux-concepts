import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	counter: 0,
	visible: true
}

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) {
			state.counter++
		},
		decrement(state) {
			state.counter--;
		},
		toggle(state) {
			state.visible = !state.visible
		},
		incrementBy(state, action) {
			state.counter += action.payload // anything passed to action will come under action<dot>"payload"
		}
	}
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;