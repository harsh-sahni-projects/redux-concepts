import styles from './Menu.module.css';
import { cartActions } from '../../../store/cart/cart';
import { useDispatch, useSelector } from 'react-redux';

const Menu = () => {
	const dispatch = useDispatch();

	const addOnion = () => {
		const newItem = {
			id: 3,
			name: 'Onion',
			unitPrice: 6,
			quantity: 1
		};
		dispatch(cartActions.addItem(newItem));
	}
	const addTomato = () => {
		const newItem = {
			id: 4,
			name: 'Tomato',
			unitPrice: 5,
			quantity: 1
		};
		dispatch(cartActions.addItem(newItem));
	}
	return (
		<div className={styles.menuContainer}>
			<button onClick={addOnion}>Add Onion</button>
			<button onClick={addTomato}>Add Tomato</button>
		</div>
	)
}

export default Menu;