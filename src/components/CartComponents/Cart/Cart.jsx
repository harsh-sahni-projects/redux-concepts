import styles from './cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart/cart';

const CartItem = (props) => {
	const itemDetails = props.itemDetails;
	const dispatch = useDispatch();

	const addItem = (e) => {
		dispatch(cartActions.addItem(itemDetails));
	}
	const removeItem = () => {
		dispatch(cartActions.remoteItem(itemDetails));
	}
	
	return (
		<div className={styles.cartItemCont} >
			<div className={styles.itemName}>{itemDetails.name}</div>
			<div>
				${itemDetails.unitPrice} x {itemDetails.quantity} = ${itemDetails.unitPrice*itemDetails.quantity}
			</div>
			<div>
				<button onClick={addItem}>+</button>
				<button onClick={removeItem}>-</button>
			</div>
		</div>
	)
}


const Cart = () => {
	const items = useSelector(state => state.cart.items);
	return (
		<div className={styles.cartContainer}>
			<header>Your cart</header>
			{items.map(item => (
				<CartItem itemDetails={item} key={item.id}/>
			))}
		</div>
	)
}

export default Cart;