import styles from './CartHeader.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../../store/cart/ui';

const CartHeader = () => {
	const dispatch = useDispatch();
	const totalItems = useSelector(state => state.cart.totalItems);

	const toggleCart = () => {
		dispatch(uiActions.toggleCart())
	}
	return (
		<div className={styles.cartHeaderContainer}>
			<div>Redux Cart</div>
			<div>
				<button onClick={toggleCart}>My Cart <span>{totalItems}</span></button>
			</div>
		</div>
	)
}

export default CartHeader;