import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
	name: 'cartUi',
	initialState: {
		cartVisible: false,
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
			console.log(state.notification);
			// if (type === 'success') {
			// 	setTimeout(() => {
			// 		state.notification = null;
			// 	}, 500);
			// } 
		}
	}
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;