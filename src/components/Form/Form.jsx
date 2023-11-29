import styles from './Form.module.css';
import { authActions } from '../../store/auth-slice.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const DUMMY_EMAIL = "example@gmail.com";

const Form = () => {
	const [email, setEmail] = useState(DUMMY_EMAIL);
	const dispatch = useDispatch();

	const login = () => {
		dispatch(authActions.login(email));
	}

	const handleInput = (e) => {
		setEmail(e.target.value.trim());
	}
	return (
		<div className={styles.formContainer}>
			<div className={styles.infoDiv}>
				<label>Email</label>
				<input type="text" onChange={handleInput} value={DUMMY_EMAIL}/>
			</div>
			<div className={styles.infoDiv}>
				<label>Password</label>
				<input type="password"/>
			</div>
			<div className={styles.loginDiv}>
				<button onClick={login}>Login</button>
			</div>
		</div>
	)
}

export default Form;