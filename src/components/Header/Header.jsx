import styles from './Header.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice.js';

const Header = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
	const email = useSelector(state => state.auth.email);
	const msg = `Hi, ${email}`;

	const logout = () => {
		dispatch(authActions.logout());
	}

	return (
		<div className={styles.header}>
			<div>Redux counter</div>
			{isLoggedIn && 
				<div>
					<span className={styles.msg}>{msg}</span>
					<button onClick={logout}>Logout</button>
				</div>
			}
		</div>
	)
}

export default Header;