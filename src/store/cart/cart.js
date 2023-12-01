import axios from 'axios';
import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui";

let endpoint = 'http://localhost:3000';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
		amount: 0,
		totalItems: 0,
		// nextId: 3
	},
	reducers: {
		// incrementId(state) {
		// 	state.nextId++;
		// },
		loadCart(state, action) {
			const { items, amount, totalItems } = action.payload;
			state.items = [...items];
			state.amount = amount;
			state.totalItems = totalItems;
		},
		addItem(state, action) {
			const itemDetails = action.payload;
			const index = state.items.findIndex(item => item.id == itemDetails.id);
			if (index == -1) {
				const newItem = {
					id: itemDetails.id,
					name: itemDetails.name,
					unitPrice: itemDetails.unitPrice,
					quantity: 1
				}
				state.items.push(newItem);
			} else {
				state.items[index].quantity++
			}
			
			state.amount += itemDetails.unitPrice * itemDetails.quantity;
			state.totalItems += 1;
		},
		remoteItem(state, action) {
			const itemId = action.payload.id;
			const index = state.items.findIndex(e => e.id == itemId);
			state.items[index].quantity--;
			state.amount -= state.items[index].unitPrice;
			state.totalItems--;
			if (state.items[index].quantity == 0) {
				state.items.splice(index,1);
			}
			// --- OR ----
			// const itemId = action.payload.id;
			// const existingItem = state.items.find(i => i.id == itemId);
			// if (existingItem.quantity == 1) {
			// 	state.items = state.items.filter(i => i.id !== itemId);
			// } else {
			// 	existingItem.quantity--;
			// }
			// state.amount -= existingItem.unitPrice;
			// state.totalItems--;
		}
	}
});

export const saveCart = (cart) => {
	return async (dispatch) => {
		dispatch(uiActions.showNotification({type: 'loading', msg: 'Saving...'}));
		try {
			await sendReq();
			dispatch(uiActions.showNotification({ type: 'success', msg: 'Saved' }));
		} catch (err) {
			dispatch(uiActions.showNotification({ type: 'error', msg: err.message }));
		}
		
		async function sendReq() {
			await axios.post(endpoint + '/updateCart', cart)
		}

	}
}

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;