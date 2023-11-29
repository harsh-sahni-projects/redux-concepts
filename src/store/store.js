import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice.js';
import authReducer from './auth-slice.js';
import cartReducer from './cart/cart.js';
import cartUiReducer from './cart/ui.js';

const store = configureStore({
	reducer: {
		counter: counterReducer,
		auth: authReducer,
		cart: cartReducer,
		cartUi: cartUiReducer
	}
})

export default store;

// ------------ OR -----------
// ----- For more reducers -----
// const store = configureStore({
// 	reducer: {
// 		counter: counterSlice.reducer,
// 		<other_reducer_name>: <other_slice>.reducer
// 	}
// })


