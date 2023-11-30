import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
	name: 'cartUi',
	initialState: {
		cartVisible: true,
		notification: null
	},
	reducers: {
		toggleCart(state) {
			state.cartVisible = !state.cartVisible;
		},
		showNotification(state, action) {
			const { msg, type } = action.payload;
			state.notification = {
				msg,
				type
			}
			// if (type === 'success') {
			// 	setTimeout(() => {
			// 		state.notification = null;
			// 	}, 500);
			// } 
		},
		hideNotification(state) {
			state.notification = null
		}
	}
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;