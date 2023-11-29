import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		email: null,
		isLoggedIn: false
	},
	reducers: {
		login(state, action) {
			state.isLoggedIn = true;
			state.email = action.payload;
		},
		logout(state) {
			state.isLoggedIn = false;
			state.email = null;
			
		}
	}
});

export const authActions = authSlice.actions;
export default authSlice.reducer;